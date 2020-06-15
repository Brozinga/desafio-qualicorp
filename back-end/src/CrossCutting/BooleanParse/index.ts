export default function ConvertStringToBoolean(str : any)  : boolean | any {
    switch (String(str).toLowerCase()) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          return null;
      }
}