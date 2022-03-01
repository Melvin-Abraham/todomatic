import toast, { Toast } from 'react-hot-toast';
import './toast.css';

type ToastType = 'error' | 'info';
type ToastOptions = Partial<Pick<Toast, "id" | "icon" | "duration" | "ariaProps" | "className" | "style" | "position" | "iconTheme">>;

interface ToastAction {
  label: string;
  onClick: (toastInstance: Toast) => void;
}

export default function createToast(
  message: string,
  type: ToastType = 'info',
  action?: ToastAction
) {
  const toastOptions: ToastOptions = {
    position: 'bottom-left',
    className: 'toast-root',
  }

  switch (type) {
    case 'error':
      toast.error((t) => getToastContent(t, message, action), toastOptions);
      break;

    default:
      toast((t) => getToastContent(t, message, action), toastOptions);
  }
}

export const dismiss = toast.dismiss;

function getToastContent(toastInstance: Toast, message: string, action?: ToastAction) {
  return (
    <div className="toast-main">
      <div className="toast-message">
        { message }
      </div>

      {(action !== undefined) && (
        <div className="toast-action">
          <button type="button" onClick={() => action.onClick(toastInstance)}>
            { action?.label }
          </button>
        </div>
      )}
    </div>
  )
}
