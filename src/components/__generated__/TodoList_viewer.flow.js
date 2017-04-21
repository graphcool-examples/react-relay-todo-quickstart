/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule TodoList_viewer.flow
 * @generated SignedSource<<3e6e074ac58ef445ee22a6fe380a09a0>>
 * @flow
 */

'use strict';

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