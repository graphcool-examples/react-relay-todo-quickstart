/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule TodoListFooter_viewer.flow
 * @generated SignedSource<<db1c1674458d32a9ebc3500182965071>>
 * @flow
 */

'use strict';

export type TodoListFooter_viewer = {
  allTodoes: TodoListFooter_viewer_allTodoes;
};

export type TodoListFooter_viewer_allTodoes_edges_node = {
  id: string;
  complete: boolean;
};

export type TodoListFooter_viewer_allTodoes_edges = {
  node: TodoListFooter_viewer_allTodoes_edges_node;
};

export type TodoListFooter_viewer_allTodoes = {
  edges?: ?Array<?TodoListFooter_viewer_allTodoes_edges>;
};
