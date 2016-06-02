import { DashButton } from './button/button';
import { DashButtonGroup } from './button/group/group';
import { DashBox } from './box/box';
import { DashToolbar } from './toolbar/toolbar';
import { DashLabel } from './label/label';
import { DashSpacer } from './spacer/spacer';
import { DashIcon } from './icon/icon';
import { DashWrapper } from './wrapper/wrapper';
import { DashNote } from './note/note';
import { DashDivider } from './divider/divider';
import { DashPager } from './pager/pager';
import { DashSparkline } from './sparkline/sparkline';
import { DashTrend } from './trend/trend';

document.registerElement('dash-button', { prototype: DashButton.prototype });
document.registerElement('dash-button-group', { prototype: DashButtonGroup.prototype });
document.registerElement('dash-label', { prototype: DashLabel.prototype });
document.registerElement('dash-box', { prototype: DashBox.prototype });
document.registerElement('dash-toolbar', { prototype: DashToolbar.prototype });
document.registerElement('dash-spacer', { prototype: DashSpacer.prototype });
document.registerElement('dash-icon', { prototype: DashIcon.prototype });
document.registerElement('dash-wrapper', { prototype: DashWrapper.prototype });
document.registerElement('dash-note', { prototype: DashNote.prototype });
document.registerElement('dash-divider', { prototype: DashDivider.prototype });
document.registerElement('dash-pager', { prototype: DashPager.prototype });
document.registerElement('dash-sparkline', { prototype: DashSparkline.prototype });
document.registerElement('dash-trend', { prototype: DashTrend.prototype });

import { DashAnalyticsSummary } from './analytics/summary/summary';

document.registerElement('dash-analytics-summary', { prototype: DashAnalyticsSummary.prototype });