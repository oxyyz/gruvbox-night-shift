# Gruvbox Night Shift palette (Dark Medium)

Source of truth: [morhetz/gruvbox `colors/gruvbox.vim`](https://github.com/morhetz/gruvbox/blob/master/colors/gruvbox.vim). Dark **Medium** uses the standard `dark0` value for `bg0`; it does not use the separate Hard or Soft background variants. The names below are Gruvbox's relative dark-mode names.

## Backgrounds and gray

| Role | Hex | RGB |
| --- | --- | --- |
| `bg0` | `#282828` | `40, 40, 40` |
| `bg1` | `#3C3836` | `60, 56, 54` |
| `bg2` | `#504945` | `80, 73, 69` |
| `bg3` | `#665C54` | `102, 92, 84` |
| `bg4` | `#7C6F64` | `124, 111, 100` |
| `gray` | `#928374` | `146, 131, 116` |

## Foregrounds

| Role | Hex | RGB |
| --- | --- | --- |
| `fg0` | `#FBF1C7` | `251, 241, 199` |
| `fg1` | `#EBDBB2` | `235, 219, 178` |
| `fg2` | `#D5C4A1` | `213, 196, 161` |
| `fg3` | `#BDAE93` | `189, 174, 147` |
| `fg4` | `#A89984` | `168, 153, 132` |

## Bright accents

| Role | Hex | RGB |
| --- | --- | --- |
| `red` | `#FB4934` | `251, 73, 52` |
| `green` | `#B8BB26` | `184, 187, 38` |
| `yellow` | `#FABD2F` | `250, 189, 47` |
| `blue` | `#83A598` | `131, 165, 152` |
| `purple` | `#D3869B` | `211, 134, 155` |
| `aqua` | `#8EC07C` | `142, 192, 124` |
| `orange` | `#FE8019` | `254, 128, 25` |

## Chrome semantic mapping

All listed keys are in Chromium's [current overwritable theme color table](https://chromium.googlesource.com/chromium/src/+/main/chrome/browser/themes/browser_theme_pack.cc). Values in `manifest.json` are decimal RGB arrays.

| Chrome theme color key | Gruvbox role | Hex | Purpose |
| --- | --- | --- | --- |
| `frame` | `bg0` | `#282828` | Active window frame and inactive tab strip |
| `frame_inactive` | `bg0` | `#282828` | Unfocused window frame |
| `toolbar` | `bg1` | `#3C3836` | Toolbar and active tab surface |
| `background_tab` | `bg0` | `#282828` | Inactive tab surface |
| `background_tab_inactive` | `bg0` | `#282828` | Inactive tabs in an unfocused window |
| `tab_text` | `fg1` | `#EBDBB2` | Active tab text |
| `tab_background_text` | `fg4` | `#A89984` | Inactive tab text |
| `tab_background_text_inactive` | `fg4` | `#A89984` | Inactive tab text in an unfocused window |
| `toolbar_text` | `fg1` | `#EBDBB2` | Toolbar text |
| `toolbar_button_icon` | `fg3` | `#BDAE93` | Chrome-owned toolbar icons |
| `bookmark_text` | `fg2` | `#D5C4A1` | Bookmark bar labels |
| `button_background` | `bg1` | `#3C3836` | Button surface blends with the toolbar where Chrome uses it |
| `omnibox_background` | `bg0` | `#282828` | Address bar inset |
| `omnibox_text` | `fg1` | `#EBDBB2` | Address bar text |
| `ntp_background` | `bg0` | `#282828` | Color behind the New Tab image |
| `ntp_text` | `fg1` | `#EBDBB2` | New Tab theme text where Chrome applies it; image-overlay text may be derived |
| `ntp_header` | `fg3` | `#BDAE93` | New Tab section headings where used |
| `ntp_link` | `yellow` | `#FABD2F` | The sole bright accent: New Tab links |

The remaining Gruvbox colors are documented above but deliberately unused in the browser chrome. Chrome derives hover and separator shades; the manifest cannot set them with a supported standalone color key. The separate `theme_ntp_background` image is centered with no repeat. There are no tint entries.
