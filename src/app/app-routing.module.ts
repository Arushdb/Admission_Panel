import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenueComponent } from "./menue/menue.component";
import { VerifySignatureComponent } from "./verify-signature/verify-signature.component";
import { QrVerifierComponent } from "./qr-verifier/qr-verifier.component"; 

const routes: Routes = [
 // { path: "", redirectTo: "qr-verify", pathMatch: "full" }, // default route
  { path: "verifySignature", component: VerifySignatureComponent },
  // ✅ New route for QR Verification
  { path: "qr-verify", component: QrVerifierComponent },
  {
    path: "interview",
    loadChildren: () =>
      import("./interview-panel/interview-panel.module").then(
        (m) => m.InterviewPanelModule
      ),
  },
  {
    path: "cca",
    loadChildren: () =>
      import("./cca-panel/cca-panel.module").then((m) => m.CcaPanelModule),
  },

  {
    path: "superAdmin",
    loadChildren: () =>
      import("./super-admin/super-admin.module").then(
        (m) => m.SuperAdminModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login-page/login-page.module").then((m) => m.LoginPageModule),
  },
  { path: "menue", component: MenueComponent },
  {
    path: "arbit",
    loadChildren: () =>
      import("./arbitration/arbitration.module").then(
        (m) => m.ArbitrationModule
      ),
  },
  {
    path: "TA",
    loadChildren: () =>
      import("./type-a/type-a.module").then((m) => m.TypeAModule),
  },
  {
    path: "TB",
    loadChildren: () =>
      import("./type-b/type-b.module").then((m) => m.TypeBModule),
  },
  {
    path: "TT",
    loadChildren: () =>
      import("./time-table/time-table.module").then((m) => m.TimeTableModule),
  },
  {
    path: "ONENT",
    loadChildren: () =>
      import("./online-entrance/online-entrance.module").then(
        (m) => m.OnlineEntranceModule
      ),
  },
  {
    path: "GD",
    loadChildren: () =>
      import("./gd-marks/gd-marks.module").then((m) => m.GdMarksModule),
  },

   // Wildcard route
  //{ path: "**", redirectTo: "qr-verify" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
