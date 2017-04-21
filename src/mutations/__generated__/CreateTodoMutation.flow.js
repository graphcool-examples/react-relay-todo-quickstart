/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule CreateTodoMutation.flow
 * @generated SignedSource<<1889e636a30075812121b67a296d3b16>>
 * @flow
 */

'use strict';

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
