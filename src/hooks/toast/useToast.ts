import * as React from "react";
import { ToastContext } from "../../shared/components/toast-provider/toast-provider";

export function useToast() {
  return React.useContext(ToastContext)!;
}