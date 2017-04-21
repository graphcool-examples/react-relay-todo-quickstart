/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule TodoList_viewer.graphql
 * @generated SignedSource<<f58ffc56242ab8238ee66e6d5449c808>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type TodoList_viewer = {
  allTodoes: TodoList_viewer_allTodoes;
};

export type TodoList_viewer_allTodoes_edges_node = {
  id: string;
  complete: boolean;
};

export type TodoList_viewer_allTodoes_edges = {
  node: TodoList_viewer_allTodoes_edges_node;
};

export type TodoList_viewer_allTodoes = {
  edges?: ?Array<?TodoList_viewer_allTodoes_edges>;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
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
                  "name": "complete",
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Todo_todo",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "allTodoes{\"first\":1000}"
    },
    {
      "kind": "FragmentSpread",
      "name": "Todo_viewer",
      "args": null
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;