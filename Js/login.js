document.getElementById("register").addEventListener("click", function () {
  document.getElementById("image").style.transform = "translate(-100%, 0%)";
  setTimeout(
    () => (document.getElementById("sign_in").style.display = "none"),
    500
  );
  setTimeout(
    () => (document.getElementById("image").style.transition = "0s"),
    500
  );
  setTimeout(
    () =>
      (document.getElementById("image").style.transform = "translate(0%, 0%)"),
    500
  );
  setTimeout(
    () => (document.getElementById("image").style.borderTopLeftRadius = "0"),
    500
  );
  setTimeout(
    () => (document.getElementById("image").style.borderBottomLeftRadius = "0"),
    500
  );
  setTimeout(
    () => (document.getElementById("image").style.transition = "0.5s ease"),
    550
  );
  setTimeout(
    () =>
      (document.getElementById("image").style.borderTopRightRadius = "25px"),
    550
  );
  setTimeout(
    () =>
      (document.getElementById("image").style.borderBottomRightRadius = "25px"),
    550
  );
  setTimeout(
    () => (document.getElementById("sign_up").style.display = "flex"),
    550
  );
  setTimeout(
    () => (document.getElementById("sign_up").style.opacity = "1"),
    600
  );
});
