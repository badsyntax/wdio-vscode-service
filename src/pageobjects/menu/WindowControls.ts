import { PluginDecorator, IPluginDecorator, BasePage } from '../utils'
import { menu } from '../../locators/1.61.0'

/**
 * Page object for the windows controls part of the title bar
 */
export interface WindowControls extends IPluginDecorator<typeof menu.WindowControls> {}
@PluginDecorator(menu.WindowControls)
export class WindowControls extends BasePage {
    /**
     * Use the minimize window button
     * @returns Promise resolving when minimize button is pressed
     */
    async minimize(): Promise<void> {
        await this.elem.$(this.locators.minimize).click();
    }

    /**
     * Use the maximize window button if the window is not maximized
     * @returns Promise resolving when maximize button is pressed
     */
    async maximize(): Promise<void> {
        try {
            await this.elem.$(this.locators.maximize).click();
        } catch (err) {
            console.log('Window is already maximized');
        }
    }

    /**
     * Use the restore window button if the window is maximized
     * @returns Promise resolving when restore button is pressed
     */
    async restore(): Promise<void> {
        try {
            await this.elem.$(this.locators.restore).click();
        } catch (err) {
            console.log('Window is not maximized');
        }
    }

    /**
     * Use the window close button. Use at your own risk.
     * @returns Promise resolving when close button is pressed
     */
    async close(): Promise<void> {
        await this.elem.$(this.locators.close).click();
    }
}