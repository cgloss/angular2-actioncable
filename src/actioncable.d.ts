import { Consumer } from './consumer'
// Type definitions for angular2-actioncable ActionCable
// TypeScript Version: 2.3

declare module ActionCable {

  function getConfig(name: string): any;
  function createConsumer(url: string): Consumer;
  function createWebSocketURL(url: string): string;

  function startDebugging(): boolean;
  function stopDebugging(): boolean;
  function log(...args): any;

}
export default ActionCable
