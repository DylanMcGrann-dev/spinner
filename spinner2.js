const spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
let time = 0;
const spin = (object) => {
  for (const frame of object) {
    setTimeout(()=>{
      process.stdout.write(frame)
    },time);
    time += 200;
  }
};
spin(spinner);
