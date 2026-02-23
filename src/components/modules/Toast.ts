import Swal from "sweetalert2";

/** Toast styled to match 720 site: navy background, orange accent, rounded-2xl */
export const TopRightToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  background: "#0B1F3B",
  color: "#fff",
  customClass: {
    popup: "toast-720",
    title: "toast-720-title",
    htmlContainer: "toast-720-body",
    icon: "toast-720-icon",
    timerProgressBar: "toast-720-progress",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
