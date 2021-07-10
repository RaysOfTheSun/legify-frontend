import { Component, Input, OnInit } from '@angular/core';
import { ApplyShellConfig } from './models/apply-shell-config';
import { ApplyShellSidenavItem } from './models/apply-shell-sidenav-item';
import { get } from 'lodash-es';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map } from 'rxjs/operators';
import { concat, Observable } from 'rxjs';

@Component({
  selector: 'legify-web-apply-shell',
  templateUrl: './apply-shell.component.html',
  styleUrls: ['./apply-shell.component.scss']
})
export class ApplyShellComponent {
  @Input() config: ApplyShellConfig;
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor(protected activatedRoute: ActivatedRoute) {}

  get currPersonName(): string {
    return get(this.config.dataSource, this.config.avatarNameValuePath, '-');
  }

  get breadCrumbs(): string[] {
    return [this.config.currApplicationName, ...this.getCurrApplyRoute()];
  }

  protected getCurrApplyRoute(): string[] {
    const segments: UrlSegment[] = this.activatedRoute.snapshot.children.reduce((prev, curr) => {
      return [...prev, ...curr.url];
    }, []);

    return segments.map((segment) => `${segment.path}_CAPTION`.toUpperCase());
  }
}
