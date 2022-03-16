const day = "monday";

// need breaks to prevent the code from keeping on running
// if you select friday, and don't have a break, it will either run until the end of the code (logging everything) OR until it hits a break

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // required to stop code execution
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day");
}
