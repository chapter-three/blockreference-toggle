
MODULE NAME
==================
Block Reference Toggle (or BRT)

This module creates a Block Reference widget called ‘Toggle Radio.’
It toggles a block to display on (show) or off (hide) on a per node basis.

The default block is set on the field settings configuration page.

IMPORTANT: Compatible only with Block Reference 2.0, not 1.0.


TO USE
==================
1. Create a field using ‘Block Reference’ as the field type. Select the widget ‘Toggle Radio’
2. Configure the widget settings as you would any other field.
   a. Set the default value (display mode) to 'hide’ or ’show’
   b. Set the default block to toggle

ISSUES with Block Reference (not with this module). These issues will not affect this module (BRT).
==================
1. Block Reference has an issue (June 17, 2014) with the autocomplete widget. See https://www.drupal.org/node/2287641.
2. When selecting 'N/A' on the select list or checkbox, error message is "undefined offset." The '_none' gets saved to the table when it shouldn't.
   hence the Block reference reads is as a moddelta string by exploding it with ':'. (example: system:main-menu)


COMPATIBILITY NOTES
==================
- Compatible only with Block Reference 2.0, not 1.0


TO DO
==================
1. Respect Block visibility settings
2. Autocomplete widget for selecting the block on the field settings configuration page. A threshold must be set to switch from checkboxes to autocomplete widget. Maybe select list too.


AUTHOR/MAINTAINER
======================
-rocks batoon or orrrange on drupal.org
http://chapterthree.com/rocks-batoon

