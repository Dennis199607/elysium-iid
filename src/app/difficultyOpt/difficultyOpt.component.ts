import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

import * as Constants from "../collections/Constants";

@Component({
  selector: "difficultyOpt-root",
  templateUrl: "./difficultyOpt.component.html",
  styleUrls: ["./difficultyOpt.component.css"]
})
export class DifficultyComponent implements OnInit {
  images_mapping = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("lang = " + params["lang"]);
    });
  }
}
