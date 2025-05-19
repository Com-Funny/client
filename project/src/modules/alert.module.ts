import Swal from "sweetalert2";

export default function Alert() {
  return {
    alert,
    error,
    warning,
    success,
  };
}

function alert(title: string, text?: string, callback?: () => void) {
  Swal.fire({
    title: title,
    text: text ?? "",
    confirmButtonText: "확인",
  }).then((result) => {
    if (result.isConfirmed) {
      if (callback) callback();
    }
  });
}

function success(title: string, text?: string, callback?: () => void) {
  Swal.fire({
    title: title,
    text: text ?? "",
    confirmButtonText: "확인",
    icon: "success",
  }).then((result) => {
    if (result.isConfirmed) {
      if (callback) callback();
    }
  });
}

function error(title: string, text?: string, callback?: () => void) {
  Swal.fire({
    title: title,
    text: text ?? "",
    confirmButtonText: "확인",
    icon: "error",
  }).then((result) => {
    if (result.isConfirmed) {
      if (callback) callback();
    }
  });
}

function warning(title: string, text?: string, callback?: () => void) {
  Swal.fire({
    title: title,
    text: text ?? "",
    confirmButtonText: "확인",
    icon: "warning",
  }).then((result) => {
    if (result.isConfirmed) {
      if (callback) callback();
    }
  });
}
