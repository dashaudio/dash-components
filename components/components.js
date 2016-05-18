import { DashButton } from './button/button';
import { DashBox } from './box/box';
import { DashHeader } from './header/header';
import { DashLabel } from './label/label';
import { DashSpacer } from './spacer/spacer';
import { DashIcon } from './icon/icon';

document.registerElement('dash-button', { prototype: DashButton.prototype });
document.registerElement('dash-label', { prototype: DashLabel.prototype });
document.registerElement('dash-box', { prototype: DashBox.prototype });
document.registerElement('dash-header', { prototype: DashHeader.prototype });
document.registerElement('dash-spacer', { prototype: DashSpacer.prototype });
document.registerElement('dash-icon', { prototype: DashIcon.prototype });
