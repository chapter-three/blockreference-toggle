/**
 * @file
 * Some basic behaviors (browser-side validation) for the Block Reference Toggle fields
 */
(function ($) {

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.blockreference_toggle = {
  attach: function (context) {
    // code is intended to do browser side validation on the field edit form UI, on the block reference field to set the Default value

    // for any changes on checkboxes widget
    $('#edit-field-block-reference-und input').change( function() {
      _blockreference_toggle_default_value_is_changed($(this));

    });

    // for the select list. if a block is selected as the 'Default value'
    $('select#edit-field-block-reference-und').change( function() {
      _blockreference_toggle_default_value_is_changed($(this));

    });

    // if the radio button 'Do not use Block Reference Toggle' is clicked
    $('#edit-instance-blockreference-toggle-deactivate').click(function() {
        // enable back the 'required field' and the 'number of values' field settings
        $('#edit-instance-required').attr('disabled', false);
        $('#edit-field-cardinality').attr('disabled', false);
        $('.blockreference-toggle-description-message').remove();
    });

    // if the radio button 'Hide the block as the default field behavior' is clicked
    $('#edit-instance-blockreference-toggle-default-hide').click(function() {
      if ($(this).attr('checked') == true) {
        _blockreference_toggle_reset_field_instance_settings();
      }
    });

    // if the radio button 'Show the block as the default field behavior' is clicked
    $('#edit-instance-blockreference-toggle-default-show').click(function() {
      if ($(this).attr('checked') == true) {
        _blockreference_toggle_reset_field_instance_settings();
      }
    });

    // this called when the default value field is changed on the field edit form ui
    function _blockreference_toggle_default_value_is_changed(obj) {
      if (obj.val() === '_none') {
        // disable the blockreference toggle radio buttons
        _blockreference_toggle_trigger_do_not_use_toggle();
      }
      else {
        // activate the BRT (blockreference toggle) radio buttons
        $('.form-item-instance-blockreference-toggle > input').removeAttr('disabled');

        // check if the blockreference toggle is switched ON
        if ($('#edit-instance-blockreference-toggle-default-hide').attr('checked')  || $('#edit-instance-blockreference-toggle-default-show').attr('checked') ) {
          // untick all checkboxes  and then tick just one checkbox in the field: "Modules defining blocks that can be referenced"
          _blockreference_toggle_limit_blocks_by_module(obj);
        }
      }
    }

    // untick all checkboxes  and then tick just one checkbox in the field: "Modules defining blocks that can be referenced"
    function _blockreference_toggle_limit_blocks_by_module(obj) {
          var moddelta = obj.val().split(':');
          var module = moddelta[0];
          var element = '#edit-instance-settings-blockreference-modules-' + module ;

          $('#edit-instance-settings-blockreference-modules  input.form-checkbox').removeAttr('disabled').removeAttr('checked');
          $(element).attr('checked', 'checked');
    }

    // uncheck the required field checkbox and reset cardinality to 1
    function _blockreference_toggle_reset_field_instance_settings() {
      //uncheck the required field checkbox and then disable the checkbox
      $('#edit-instance-required').attr('checked', false);
      $('#edit-instance-required').attr('disabled', true);
      if ($('.form-item-instance-required label.option > .blockreference-toggle-description-message').length == 0) {
        $('.form-item-instance-required label.option').append('<span class="blockreference-toggle-description-message"> -- This is now disabled because the field is configured to use Block Reference Toggle.</span>');
      }
      //reset to value '1'  the number of values field select list and then disable select list
      $('#edit-field-cardinality').val(1);
      $('#edit-field-cardinality').attr('disabled', true);
      if ($('.form-item-field-cardinality > .description > .blockreference-toggle-description-message').length == 0) {
        $('.form-item-field-cardinality > .description').prepend('<span class="blockreference-toggle-description-message"> This is now disabled because the field is configured to use Block Reference Toggle. </span>');
      }

      // TODO set the module for the field  "Modules defining blocks that can be referenced"
      // for the checkboxes
      var radio = $('#edit-field-block-reference-und input[type="radio"]:checked');
      if (radio.length > 0) {
        var moddelta = radio.attr('value');
        radio.val(moddelta) ;
        _blockreference_toggle_limit_blocks_by_module(radio);
      }

      // for the select list
      var select_list = $('select#edit-field-block-reference-und');
      if (select_list.val() > "") {
        _blockreference_toggle_limit_blocks_by_module(select_list);
      }
    }

    // function will disable the blockreference toggle radio buttons
    function _blockreference_toggle_trigger_do_not_use_toggle() {
      // trigger the 'Do not use Block Reference Toggle' radio button
      $('#edit-instance-blockreference-toggle-deactivate').trigger('click');

      // disable the Block Reference Toggle radio buttons
      $('.form-item-instance-blockreference-toggle > input').attr('disabled', 'disabled');
    }
  }
}

})(jQuery);
