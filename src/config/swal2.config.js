import Swal from "sweetalert2";
function swal2Timing(title, html, timer, icon) {
  let timerInterval;
  Swal.fire({
    title: title,
    html: html,
    timer: timer,
    icon: icon,
    timerProgressBar: true,
    didOpen: () => {},
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

export { swal2Timing };
