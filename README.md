Block reference toggle README

CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Usage
 * Maintainers


INTRODUCTION
------------
Defines a widget type called ‘Toggle Radio’ for the field ‘Block Reference.’
This widget allows that ONE block to be toggled ‘show’ or ‘hide’ on a PER NODE basis.

The regular widgets that come with Block Reference allows you choose one block from
so many blocks on the node edit form. This is useful when you want to show a different
block for every node. But when you want to ensure that only ONE BLOCK can be displayed
for that field, and you want to restrict the editor to be able to only hide or show
the block, then you need this module.


REQUIREMENTS
------------
This module requires the following modules:
 * Block Reference 2.0 and above only (https://drupal.org/project/blockreference)
  IMPORTANT: This module is not compatible with Block Reference 1.0.


INSTALLATION
------------
 * Install as you would normally install a contributed drupal module. See:
   https://drupal.org/documentation/install/modules-themes/modules-7
   for further information.


CONFIGURATION
-------------
 * TO DO


USAGE
-----
1. Create a field using ‘Block Reference’ as the field type. Select the widget ‘Toggle Radio’
2. Configure the widget settings as you would any other field.
   a. Set the default value (display mode) to 'hide’ or ’show’
   b. Set the default block to be referenced (as checkboxes widget. If Your site has more than 20 blocks, then the form element turns into an autocomplete widget).


MAINTAINERS
-----------
Current maintainers:
 * Rocks Batoon (orrrange) - https://www.drupal.org/user/639690


OTHER NOTES
-----------

1. Block Reference has an issue (June 17, 2014) with the autocomplete widget. See https://www.drupal.org/node/2287641.
2. When selecting 'N/A' on the select list or checkbox, error message is "undefined offset." The '_none' gets saved to the table when it shouldn't.
   hence the Block reference reads is as a moddelta string by exploding it with ':'. (example: system:main-menu)


TO DO
-----------
1. Respect Block visibility settings
2. Remove some blocks that can be referenced. Example: blocks created by fieldblock module from fields that are of type 'blockreference'.
   A redundant feature.


