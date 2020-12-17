# JoinedTextView

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Old documentation content

## Joined Text View

**Viewer for finely granulated text elements in Knora**

This text viewer displays text that has been divided into resources for blocks, lines, margins and even words.
Given a root resource IRI (e.g. for a page), the Knora instance address and a JSON specification, the parts can be
re-constituted with individual requests and can be enriched with styles and events.

Inseri internal dependencies: RichTextModule

<!--
### Usage

Selector: `<app-joined-text-view>`

#### Needed inputs

- Address to your Knora instance:  
  `[backendAddress]`  

(IP and Port or URL, excluding parts like `/v1` or `/v2`)


- IRI of the root resource of your text:  
  `[textRootIri]` *or* `[queryParamForTextRootIri]`  
  The input through `textRootIri` is used for paging through results of a saved query. The `queryParamForTextRootIri`-way, 
  using a queryParam in the URL enables interaction with other apps.

- Definition of the tree structure:  
  `[textConfiguration]`


#### Optional Inputs

Styles (from RichTextView)

- Default style declarations  
  `styleDeclarations`
  Example:  
  ```json
  [
    {
      "type": "tag",
      "name": "p",
      "background-color" : "black;"
    },
    {
      "type": "class",
      "name": "class-name-used-in-html-from-backend",
      "color": "red;"
    }
  ]  
  ```
  
- Style declarations by query parameter keys from the URL  
  `selectiveStyleDeclarations`  
  As `styleDeclarations` but for several values of the query parameter `style`


#### Inputs mapped through Inseri and not available to the data management:
- Synchronised behaviour when hovering over resources (two-way-binding):  
  `[(hoveredResource)]`  
  This property is the basis for visual highlighting of corresponding resources in different views.
 
-->
