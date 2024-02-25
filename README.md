# Angular Multi-Progress Bar

This is a free to use package that gives you the scaffolding you need to make a sectioned progress bar!

## Inputs

*progressBarData* : Pass in an array of the following objects (one for each section). This is to build the bar itself.
| Property               |Value                          |Purpose|
|----------------|-------------------------------|-----------------------------|
|percentage| `number`          |How much of the bar will this section take?            |
| displayNumber|`number`|What is the numerical value that will display over this section?            |
| valueColorAssignment|`string`|What color will this section be?|

-------------

*progressBarLegend* : Pass in an array of the following objects (one for each section). This is to build the labels below the bar
| Property               |Value                          |Purpose|
|----------------|-------------------------------|-----------------------------|
|legendValue| `string`          |What text do you want to correspond with this section?            |
| valueColorAssignment|`string`|What color will this key be?|

--------------
*bannerProgressBar* : `boolean` - Do you want to display the total number above the progress bar (see examples folder to see difference).

## Notes
This is still a work in progress, please feel free to request updates. The next update will be the ability to customize the fonts.