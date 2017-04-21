/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule TodoApp_viewer.flow
 * @generated SignedSource<<602f39260f027e7253db72bf12825fbe>>
 * @flow
 */

'use strict';

export type TodoApp_viewer = {
  id: string;
  allTodoes: TodoApp_viewer_allTodoes;
};

export type TodoApp_viewer_allTodoes_edges_node = {
  id: string;
  complete: boolean;
};

export type TodoApp_viewer_allTodoes_edges = {
  node: TodoApp_viewer_allTodoes_edges_node;
};

export type TodoApp_viewer_allTodoes = {
  edges?: ?Array<?TodoApp_viewer_allTodoes_edges>;
};
