# Gruvbox Night Shift — Dark Medium Theme

A Chrome **theme** based on the original [morhetz/gruvbox](https://github.com/morhetz/gruvbox) Vim color scheme. It uses the **Dark Medium** variant: the standard `#282828` background, warm foregrounds, and one bright accent for New Tab links. The supplied illustration appears only on the New Tab page; the browser frame and toolbar stay flat. There is no JavaScript or New Tab page override.

## Color design

The frame and inactive tabs use `bg0` (`#282828`). The toolbar and active tab use `bg1` (`#3C3836`), giving the selected tab a quiet but visible change in surface. Active text uses `fg1`; inactive tab text uses `fg4`. Bookmarks use `fg2`; Chrome-owned toolbar icons use the quieter `fg3` against a `bg1` button surface. The omnibox returns to `bg0` for a subtle inset. The New Tab page uses the supplied image, with `bg0` behind any uncovered area and bright yellow for links. See [PALETTE.md](PALETTE.md) for every source color and manifest mapping.

Chrome does not expose a separate `active_tab` color key. Its active tab follows the toolbar color, while `background_tab` colors inactive tabs. Hover fills, separators, and some New Tab elements are derived by Chrome and can differ by Chrome version or platform. The manifest uses only color keys present in [Chromium's current theme color table](https://chromium.googlesource.com/chromium/src/+/main/chrome/browser/themes/browser_theme_pack.cc); it does not use obsolete `ntp_section` or unsupported separator keys.

The `button_background` key does not draw a separate background behind every toolbar icon. Pinned extension icons supply their own artwork, so this theme cannot recolor their purple, orange, or other built-in marks. Unpinning selected extensions in Chrome is the only way to remove those marks from the toolbar without changing the extensions themselves.

## New Tab image

`assets/new-tab-background.png` is a 2560 × 1440 PNG with a 256-color palette to keep the file small. Chrome themes require PNG image assets. The image is centered and does not repeat; the `bg0` color fills any uncovered area. Current Chrome uses the image at its natural pixel size, so smaller windows crop the edges and larger or high-density displays may show background-colored margins. A Chrome theme cannot specify responsive `background-size: cover` without replacing the New Tab page, which this project intentionally does not do.

With a theme image present, current Chrome derives some New Tab foreground colors, including prominent text, from its own image-background styling rather than applying `ntp_text` everywhere. The manifest keeps the Gruvbox New Tab color keys for surfaces and elements where Chrome uses them.

If you publish this theme, confirm that you have the rights to distribute the supplied illustration.

## Load and test locally

1. Open **Google Chrome** and visit `chrome://extensions`.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select this folder (`gruvbox-dark-medium-chrome-theme`, the directory containing `manifest.json`).
4. Open several tabs and a New Tab page. Check active versus inactive tabs, toolbar controls, bookmark bar text, and the omnibox. Open a second Chrome window and switch focus to inspect inactive-frame text.
5. If a custom New Tab background or another theme is active, reset that customization before judging the colors. Reload the theme from `chrome://extensions` after editing `manifest.json`.

The theme changes Chrome's browser UI, not website content. It does not replace the New Tab page or add an extension button.

## Optional New Tab extension

Chrome's own New Tab page always shows the Google logo, search box, and Gmail/Images links; a theme cannot hide them. The separate extension in [`newtab-extension/`](newtab-extension/) replaces the New Tab page with the same illustration (scaled to cover the window), a clock and date in the top-right corner, and GitHub and BuildLab links in the bottom-left corner. Edit the links in `newtab-extension/newtab.html`.

Load it the same way as the theme: **Load unpacked** on `chrome://extensions`, selecting the `newtab-extension` folder. On the first New Tab, Chrome asks whether to keep the changed page; choose **Keep it**. Search from the address bar. The theme and the extension are independent and can be installed together.

## Package

Create a ZIP whose **root contains `manifest.json`**, not an extra wrapping directory. For example, from this folder in PowerShell:

```powershell
Compress-Archive -Path manifest.json,README.md,PALETTE.md,assets -DestinationPath ..\gruvbox-night-shift-1.3.0.zip
```

Alternatively, use **Pack extension** on `chrome://extensions` to make a local CRX. Keep any generated private key secure and outside the published ZIP. This theme does not need an icon to load locally.

## Publish later

Register a Chrome Web Store developer account, prepare the store listing and required promotional material, then upload the ZIP in the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole). Choose a theme category, complete the listing and privacy information requested by the dashboard, and submit it for review. For an update, increase `version` before packaging again. Follow Google's [theme guidance](https://developer.chrome.com/docs/extensions/develop/ui/themes) and [publishing guide](https://developer.chrome.com/docs/webstore/publish) when publishing; listing requirements can change.

The source palette is MIT/X11 licensed by morhetz. This project uses its color values and does not copy Gruvbox artwork or source code.
