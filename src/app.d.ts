import type { InboundContext } from "intor";

declare global {
  namespace App {
    interface Locals {
      intor: InboundContext;
    }
  }
}

export {};
