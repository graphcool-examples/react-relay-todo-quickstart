/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule RemoveTodoMutation.graphql
 * @generated SignedSource<<424b3534cc919f9f97c599a9a6e06412>>
 * @relayHash 9cb921bcdea317a64c480a555a02c1b0
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeleteTodoInput = {
  id?: ?string;
};

export type RemoveTodoMutationResponse = {
  todo?: ?RemoveTodoMutationResponse_todo;
  viewer: RemoveTodoMutationResponse_viewer;
};

export type RemoveTodoMutationResponse_todo = {
  id: string;
};

export type RemoveTodoMutationResponse_viewer_allTodoes_edges_node = {
  id: string;
};

export type RemoveTodoMutationResponse_viewer_allTodoes_edges = {
  node: RemoveTodoMutationResponse_viewer_allTodoes_edges_node;
};

export type RemoveTodoMutationResponse_viewer_allTodoes = {
  edges?: ?Array<?RemoveTodoMutationResponse_viewer_allTodoes_edges>;
};

export type RemoveTodoMutationResponse_viewer = {
  id: string;
  allTodoes: RemoveTodoMutationResponse_viewer_allTodoes;
};
*/

/* eslint-disable comma-dangle, quotes */

/*
mutation RemoveTodoMutation(
  $input: DeleteTodoInput!
) {
  deleteTodo(input: $input) {
    todo {
      id
    }
    viewer {
      id
      allTodoes(last: 1000) {
        edges {
          node {
            id
          }
        }
      }
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
        "type": "DeleteTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteTodoInput!"
          }
        ],
        "concreteType": "DeleteTodoPayload",
        "name": "deleteTodo",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
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
  "name": "RemoveTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RemoveTodoMutation",
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
            "type": "DeleteTodoInput!"
          }
        ],
        "concreteType": "DeleteTodoPayload",
        "name": "deleteTodo",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
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
  "text": "mutation RemoveTodoMutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    todo {\n      id\n    }\n    viewer {\n      id\n      allTodoes(last: 1000) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
