// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberRequest as _randomPackage_NumberRequest, NumberRequest__Output as _randomPackage_NumberRequest__Output } from '../randomPackage/NumberRequest';
import type { NumberResponse as _randomPackage_NumberResponse, NumberResponse__Output as _randomPackage_NumberResponse__Output } from '../randomPackage/NumberResponse';
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PongResponse as _randomPackage_PongResponse, PongResponse__Output as _randomPackage_PongResponse__Output } from '../randomPackage/PongResponse';
import type { TodoRequest as _randomPackage_TodoRequest, TodoRequest__Output as _randomPackage_TodoRequest__Output } from '../randomPackage/TodoRequest';
import type { TodoResponse as _randomPackage_TodoResponse, TodoResponse__Output as _randomPackage_TodoResponse__Output } from '../randomPackage/TodoResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  RandomNumbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNumbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNumbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PongResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_randomPackage_NumberRequest__Output, _randomPackage_NumberResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_randomPackage_TodoRequest__Output, _randomPackage_TodoResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PongResponse, _randomPackage_PingRequest__Output, _randomPackage_PongResponse__Output>
  RandomNumbers: MethodDefinition<_randomPackage_NumberRequest, _randomPackage_NumberResponse, _randomPackage_NumberRequest__Output, _randomPackage_NumberResponse__Output>
  TodoList: MethodDefinition<_randomPackage_TodoRequest, _randomPackage_TodoResponse, _randomPackage_TodoRequest__Output, _randomPackage_TodoResponse__Output>
}
