/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule CreateTodoMutation.graphql
 * @generated SignedSource<<23a5876c6474db360185c1f3332e278a>>
 * @relayHash 944315cd3f9a1103c1daab2cde0fbf50
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateTodoInput = {
  complete?: ?boolean;
  text?: ?string;
};

export type CreateTodoMutationResponse = {
  todo?: ?CreateTodoMutationResponse_todo;
  edge?: ?CreateTodoMutationResponse_edge;
  viewer: CreateTodoMutationResponse_viewer;
};

export type CreateTodoMutationResponse_todo = {
  id: string;
  text: string;
  complete: boolean;
};

export type CreateTodoMutationResponse_edge_node = {
  id: string;
  text: string;
  complete: boolean;
};

export type CreateTodoMutationResponse_edge = {
  node: CreateTodoMutationResponse_edge_node;
};

export type CreateTodoMutationResponse_viewer_allTodoes_edges_node = {
  id: string;
  text: string;
  complete: boolean;
};

export type CreateTodoMutationResponse_viewer_allTodoes_edges = {
  node: CreateTodoMutationResponse_viewer_allTodoes_edges_node;
};

export type CreateTodoMutationResponse_viewer_allTodoes = {
  edges?: ?Array<?CreateTodoMutationResponse_viewer_allTodoes_edges>;
};

export type CreateTodoMutationResponse_viewer = {
  allTodoes: CreateTodoMutationResponse_viewer_allTodoes;
};
*/

/* eslint-disable comma-dangle, quotes */

/*
mutation CreateTodoMutation(
  $input: CreateTodoInput!
) {
  createTodo(input: $input) {
    todo {
      id
      text
      complete
    }
    edge {
      node {
        id
        text
        complete
      }
    }
    viewer {
      allTodoes(last: 1000) {
        edges {
          node {
            id
            text
            complete
          }
        }
      }
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateTodoInput!"
          }
        ],
        "concreteType": "CreateTodoPayload",
        "name": "createTodo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "name": "todo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "text",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "complete",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "complete",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "viewer",
            "args": null,
            "concreteType": "Viewer",
            "name": "__viewer_viewer",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 1000,
                    "type": "Int"
                  }
                ],
                "concreteType": "TodoConnection",
                "name": "allTodoes",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Todo",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "text",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "complete",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allTodoes{\"last\":1000}"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateTodoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateTodoInput!"
          }
        ],
        "concreteType": "CreateTodoPayload",
        "name": "createTodo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "name": "todo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "text",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "complete",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "complete",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "name": "viewer",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 1000,
                    "type": "Int"
                  }
                ],
                "concreteType": "TodoConnection",
                "name": "allTodoes",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Todo",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "text",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "complete",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allTodoes{\"last\":1000}"
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": null,
            "handle": "viewer",
            "name": "viewer",
            "key": "",
            "filters": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    todo {\n      id\n      text\n      complete\n    }\n    edge {\n      node {\n        id\n        text\n        complete\n      }\n    }\n    viewer {\n      allTodoes(last: 1000) {\n        edges {\n          node {\n            id\n            text\n            complete\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
