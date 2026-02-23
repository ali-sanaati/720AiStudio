import Swal from "sweetalert2";

/** Toast styled to match 720 site: navy background, orange accent, rounded-2xl */
export const TopRight720Toast = Swal.mixin({
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

/** Toast styled to match Bimetryx site: light background, primary blue accent */
export const TopRightBimetryxToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  background: "#f7f9fc",
  color: "#1c1c1e",
  customClass: {
    popup: "toast-bimetryx",
    title: "toast-bimetryx-title",
    htmlContainer: "toast-bimetryx-body",
    icon: "toast-bimetryx-icon",
    timerProgressBar: "toast-bimetryx-progress",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

/** Toast styled to match RepUpRise site: dark theme, plum/purple accent */
export const TopRightRepupriseToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  background: "#1E1B22",
  color: "#E6E4EA",
  customClass: {
    popup: "toast-repuprise",
    title: "toast-repuprise-title",
    htmlContainer: "toast-repuprise-body",
    icon: "toast-repuprise-icon",
    timerProgressBar: "toast-repuprise-progress",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
