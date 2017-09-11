export class Delay {
  date: string;
  line: string;
  station: string;
  time: number;

  constructor(line: string, station: string, time: number) {
    this.date = (new Date()).toString();
    this.line = line;
    this.station = station;
    this.time = time;
  }

}
