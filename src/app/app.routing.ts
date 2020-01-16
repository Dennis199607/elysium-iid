import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { JoinComponent } from "./join/join.component";
import { DifficultyComponent } from "./difficultyOpt/difficultyOpt.component";

const routes = [
  { path: "start", component: StartComponent },
  { path: "join", component: JoinComponent },
  { path: "difficulty", component: DifficultyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
