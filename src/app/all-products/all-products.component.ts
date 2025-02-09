import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
}
