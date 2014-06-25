/**
 * @file
 * Some basic behaviors for the Block Reference Toggle fields
 */
(function ($) {

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.blockreference_toggle = {
  attach: function (context) {


    // for the select list. if a block is selected as the 'Default value'
    $('#edit-field-block-reference-und').change( function() {
      console.log('Select list is changed');
      console.log($('#edit-field-block-reference-und').val());

      // for the select list
      if ($('#edit-field-block-reference-und').val() === '_none') {

        _blockreference_toggle_trigger_do_not_use_toggle();

      }

      //
      else {
        $('.form-item-instance-blockreference-toggle > input').removeAttr('disabled');
      }

      // for the checkboxes widget - TODO
      $('input#edit-field-block-reference-und-none').click( function() {
        console.log('N/A has been clicked on the checkboxes list');
        _blockreference_toggle_trigger_do_not_use_toggle();
      });

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
    }

    function _blockreference_toggle_trigger_do_not_use_toggle() {
      // trigger the 'Do not use Block Reference Toggle' radio button
      $('#edit-instance-blockreference-toggle-deactivate').trigger('click');

      // disable the Block Reference Toggle radio buttons
      $('.form-item-instance-blockreference-toggle > input').attr('disabled', 'disabled');
    }
  }
}

})(jQuery);
