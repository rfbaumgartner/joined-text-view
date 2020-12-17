import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joined-text-view';

  backendAddress = "http://localhost/3333"

  textRootIri: string;  // keep undefined if queryParamForTextRootIri is given

  queryParamForTextRootIri = "stanza";

  textConfiguration = {
    "lines": {
      "propertyIri": "http://api.knora.org/ontology/shared/text-structure/simple/v2#isPartOfTextExpression",
      "propertyDirection": "inverted",
      "sortByPropertyIri": "http://api.knora.org/ontology/knora-api/simple/v2#seqnum",
      "interfix2": " | ",
      "suffix": " || ",
      "columnRatio": [
        "0",
        "0",
        "0",
        "100%",
        "0",
        "0",
        "0"
      ],
      "lineparts": {
        "propertyIri": "http://0.0.0.0:3333/ontology/0041/atharvaveda/simple/v2#isVerseOfHalfStrophe",
        "propertyDirection": "inverted",
        "sortByPropertyIri": "http://api.knora.org/ontology/knora-api/simple/v2#seqnum",
        "interfix": " ' ",
        "lineparts": {
          "propertyIri": "http://api.knora.org/ontology/shared/prosodic-structure/simple/v2#isWordOfVerse",
          "propertyDirection": "inverted",
          "sortByPropertyIri": "http://api.knora.org/ontology/knora-api/simple/v2#seqnum",
          "interfix": " ",
          "lineparts": {
            "propertyIri": "http://api.knora.org/ontology/shared/concept/simple/v2#informationHasSubject",
            "propertyDirection": "direct",
            "sortByPropertyIri": "http://api.knora.org/ontology/knora-api/simple/v2#seqnum",
            "contentPropertyIri": "http://api.knora.org/ontology/shared/language/simple/v2#hasContent",
            "hoverable": true,
            "hoverColor": "#F0F8FF",
            "clickable": true,
            "clickColor": "cyan",
            "styleKeys": [
              "pt-word"
            ]
          }
        }
      }
    }
  };

  // useful if styleKeys is set:
  styleDeclarations = {} ;
  selectiveStyleDeclarations = {} ;

  hoveredElement: string;
}
