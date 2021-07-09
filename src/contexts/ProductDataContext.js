import React, { createContext, useContext } from "react";

const ProductContext = createContext(null);
export { ProductContext };

// Keyboard layouts

// code: 40
// text: 40%

// code: 50
// text: 50%

// code: 60
// text: 60%

// code: 65
// text: 65%

// code: tkl
// text: Ten KeyLess (TKL)

// code: full
// text: Full Size (100%)

// code: ergo
// text: Split & Ergonomic

// code: diy
// text: DIY Keyboard Kits

export function ProductProvider({ children }) {
  const productData = {
    keyboard001: {
      title: `DROP SHIFT MECHANICAL KEYBOARD`,
      images: {
        base: `/assets/images/products/keyboard001/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 250,
        rating: 4,
        brand: "Drop",
        layout: "tkl",
        layoutText: "Ten KeyLess (TKL)",
      },
      description: {
        primary: `The latest addition to our family of mechanical keyboards, the Drop SHIFT is our largest and most ambitious undertaking yet. Done in the compact 1800 layout, it’s still significantly shorter than a traditional full-size keyboard, which frees up desk space for other gear. And though the numpad and arrows are much closer, they’re still broken out, so they’re easy to find without looking down. Just like the CTRL and ALT, the SHIFT features a sleek aluminum case, customizable RGB backlighting, a fully programmable layout, and hot-swappable switch sockets. That means you can pop in new switches whenever you want without any soldering.`,
        secondary: [
          {
            title: `OPTIMIZED PER-KEY LIGHTING WITH MILLIONS OF COLORS`,
            description: `The switches on the SHIFT feature light pipes optimized to deliver the most light possible through the keycaps. You'll have your choice from millions of colors for every single key, so you're sure to find the tone you want. Program the lighting to cycle through the entire spectrum, or set it to a two-tone look to match your setup. There’s also a built-in translucent LED diffuser to minimize hot spots found in many other keyboards. Worried about flickering? Don’t be. The LEDs operate at a frequency of 100 Hz, so there won't be any visible flicker. Finally, we're including RGB LED indicators for Capslock, Numlock, and Scroll lock—all of which can be customized as well.`,
            priority: 1,
          },
          {
            title: `FULLY PROGRAMMABLE VIA QMK`,
            description: `Customizing your keyboard is a lot of fun. That’s why the SHIFT features a fully programmable layout designed for modification. Using QMK firmware, you have total control over every key. Plus, the configurator allows you to program macros and customized keymapping, so you can easily fine-tune your keyboard for gaming, work, or play. It’s also outfitted with two USB Type-C connectors (one on each side), allowing you to transfer data and charge devices at USB 2.0 speeds.`,
            priority: 1,
          },
          {
            title: `HEFTY ALUMINUM FRAME & HOT-SWAPPABLE SWITCHES`,
            description: `Known for its toughness and ability to hold a quality surface finish, anodized aluminum plays the starring role in the SHIFT’s frame. Heavy enough to stay put when you're cranking out an email or locked into an intense FPS match, the frame has a low profile to complement your desktop. Thanks to the built-in switch plate and hot-swappable PCB, the SHIFT gives you the freedom to change out your switches whenever you like. Best of all? You don’t need to solder each switch—just pop them in and they’re ready to go. Fitted with removable feet, the keyboard can be adjusted for height, too.`,
            priority: 2,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },
          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 2 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 2,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 2,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 2 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 2,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 2 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard002: {
      title: `DROP + TOKYO KEYBOARD TOKYO60 KEYBOARD KIT`,
      images: {
        base: `/assets/images/products/keyboard002/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 250,
        rating: 4,
        brand: "Tokyo",
        layout: "60",
        layoutText: "60%",
      },
      description: {
        primary: `Designed in Japan by Tokyo Keyboard, the Tokyo60 is a compact HHKB-style board with a sleek, seamless design. This Season 4 version features two new case colors, the return of the black-on-gray keycap set from Season 2 (and the coral Fn key from Season 3), as well as a USB-C PCBA. Constructed with two pieces of 6000-series aluminum, the case is machined to have a 5-degree angle. This angle, combined with the Cherry-profile keycaps, is optimized for an ergonomic feel. Built into the aluminum case, the integrated plate adds even more stability. Thanks to the hot-swap sockets on the PCBA, you can swap in new switches in minutes without any soldering—so feel free to try a new feel whenever you want. With a fully programmable layout and RGB lighting, the board can be customized any way you like. For more on the Happy Hacking Keyboard style, check out this interview with the creator.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard003: {
      title: `DROP CTRL BAREBONES MECHANICAL KEYBOARD`,
      images: {
        base: `/assets/images/products/keyboard003/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 150,
        rating: 4,
        brand: "CTRL",
        layout: "60",
        layoutText: "60%",
      },
      description: {
        primary: `To put it simply, the CTRL mechanical keyboard has it all. Constructed with a solid aluminum frame with a built-in switch plate, it’s stable and fortified. And thanks to the Kaihua switch sockets, it allows you to change switches whenever you want with no soldering required. It’s also fully programmable via QMK, meaning you can assign macros or custom keybinds to every key if you like. With dual USB-C connectors, the CTRL is outfitted with the fastest available connections. Aesthetically, the CTRL impresses, too. Featuring customizable RGB backlighting and underlighting, it puts on a show in myriad colors; or you can set it to a single color for a more subtle look.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard004: {
      title: `DROP + OLKB PLANCK MECHANICAL KEYBOARD KIT V6`,
      images: {
        base: `/assets/images/products/keyboard004/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 100,
        rating: 5,
        brand: "OLKB",
        layout: "40",
        layoutText: "40%",
      },
      description: {
        primary: `The ortholinear 40% Planck mechanical keyboard is hailed for its unique layout—and the new version is even better. Laid out so that every key is within two units of your fingers on the home row, this compact keyboard minimizes finger travel. The “raise” and “lower” space bar keys make it easy to access additional layers for extra functionality. For this round, the CNC aluminum case comes in six different colors, including the bold new red and yellow colorways. This version also has Kaihua hot-swappable switch sockets, so you can swap out your switches without ever picking up a soldering iron. What’s more, the new Planck has an upgraded ARM STM32 processor that provides more power to the PCB and USB-C connector—and it comes in two case styles.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard005: {
      title: `DROP + OLKB PREONIC KEYBOARD MX KIT V3`,
      images: {
        base: `/assets/images/products/keyboard005/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 140,
        rating: 5,
        brand: "OLKB",
        layout: "40",
        layoutText: "40%",
      },
      description: {
        primary: `The original Preonic keyboard was praised for its build quality, compact form factor, and intuitive layout—and the new version is no different. However, this time around we're offering the CNC-aluminum case in your choice of five colors, including the striking new purple colorway. What's more, this version has a new ARM STM32 processor that provides more power to the PCBA and the USB-C connector. Another upgrade? The new Preonic has Kaihua hotswap sockets (which support grid 2x1u, 1x2u, and 2x2u bottom row layouts) so you can swap out your switches whenever you want without even picking up a soldering iron. Plus, If you’re new to keyboard kits, the compact Preonic is a great way to learn about keyboard programming.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard006: {
      title: `DROP CTRL HIGH-PROFILE BAREBONES KEYBOARD`,
      images: {
        base: `/assets/images/products/keyboard006/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 200,
        rating: 4,
        brand: "CTRL",
        layout: "60",
        layoutText: "60%",
      },
      description: {
        primary: `The Drop CTRL High-Profile is just like the original CTRL, but now it  comes with a tall CNC-aluminum case that covers the switches. Machined  at a 6-degree angle, the case is ergonomically crafted for a natural  feel—and it’s quite a bit heavier than before. Thanks to the Kaihua  switch sockets, the keyboard allows you to swap switches whenever you  want with no soldering required. It’s also fully programmable via QMK,  meaning you can assign macros or custom keybinds to every key. With dual  USB-C connectors, the CTRL High-Profile is outfitted with the latest  connections. What’s more, it has customizable RGB backlighting and  underlighting, so you can set it to a single color or light it up with a  rainbow wave.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard007: {
      title: `DROP ALT HIGH-PROFILE MECHANICAL KEYBOARD`,
      images: {
        base: `/assets/images/products/keyboard007/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 230,
        rating: 4,
        brand: "ALT",
        layout: "full",
        layoutText: "Full Size (100%)",
      },
      description: {
        primary: `The Drop ALT High-Profile is just like the original ALT, but now it comes with a tall CNC-aluminum case that covers the switches. Machined to have a 6-degree angle, the case is ergonomically crafted for a natural feel. Absent of function keys, the keyboard wastes no space—but it still has a full set of arrows and numerals. Thanks to the hot-swap switch sockets, it allows you to swap switches whenever you want with no soldering required. It’s also fully programmable via QMK, meaning you can assign macros or custom keybinds to every key. With dual USB-C connectors, the ALT High-Profile is outfitted with the latest connections. What’s more, it has customizable RGB backlighting and underlighting. Set it to a single color or light it up with a rainbow wave pattern. To enhance the backlighting, there are shine-through doubleshot PBT keycaps.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard008: {
      title: `DROP ALT HIGH-PROFILE MECHANICAL KEYBOARD`,
      images: {
        base: `/assets/images/products/keyboard008/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 90,
        rating: 5,
        brand: "ENTR",
        layout: "tkl",
        layoutText: "Tenkeyless (TKL)",
      },
      description: {
        primary: `Mechanical keyboards have been a vital part of the Drop community for years. But with all of their customizable components, they can be difficult to grasp at first. The Drop ENTR is the culmination of our efforts to create an accessible keyboard made with enthusiast-grade materials—a win-win for those just getting into the hobby, and those who’ve been in it for years. Crafted in the popular tenkeyless (TKL) layout, the ENTR has a neutral aesthetic that looks the part in any environment. The keycaps are the same you’ll find on our popular CTRL and ALT keyboards. Made from durable doubleshot PBT, they won’t fade or shine—but they’re easy to switch out if you want a new look. Available in three colors, with your choice of mechanical switches, the ENTR offers unbeatable value. Once you go mechanical, good luck turning back.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard009: {
      title: `YMDK SPLIT 64 HOT-SWAPPABLE MECHANICAL KEYBOARD KIT`,
      images: {
        base: `/assets/images/products/keyboard009/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 180,
        rating: 5,
        brand: "YMDK",
        layout: "ergo",
        layoutText: "Split & Ergonomic",
      },
      description: {
        primary: `While split keyboards may seem odd at first, they can make a world of difference for your fingers and wrists. From YMDK, this 64-key mechanical keyboard is split in half to promote a more comfortable position with both hands. However, comfort is just one of its many cutting-edge features. Built with a solid aluminum case, it’s heavy and durable. The Kailh hotswap sockets allow you to pop in any kind of switch you want, at any time—all without a soldering iron. Backed by a mini-USB connection, the keyboard also lights up, thanks to an acrylic diffuser that glows around the base. To keep the two halves steady, there are rubber feet, too. The base kit does not include switches or keycaps, but you can add them at checkout. Tack on the animal-themed keycap set for a playful look.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
    keyboard010: {
      title: `LOGITECH PRO GAMING KEYBOARD`,
      images: {
        base: `/assets/images/products/keyboard010/`,
        card: {
          path: `card.jpg`,
        },
        slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
      },
      parameters: {
        price: 118,
        rating: 5,
        brand: "Logitech",
        layout: "tkl",
        layoutText: "Ten KeyLess (TKL)",
      },
      description: {
        primary: `Made for gamers, the Logitech Pro Gaming Keyboard is loaded with features to optimize performance and look good while doing it. With a pro-favorite tenkeyless layout, this space-efficient staple gives you plenty of room to mouse while still offering a function row for extra commands. Use Logitech’s included G HUB software to create up to 12 F-key macros, and customize the Pro’s onboard RGB lighting via the LIGHTSYNC RGB feature. GX Blue mechanical switches provide a tactile typing feel with a satisfying click, while adjustable case feet help you find the perfect typing angle. Finally, a detachable Micro-USB in the back center of the board allows for easy travel and a connection that doesn’t disrupt your gaming.`,
        secondary: [
          {
            title: `A 60% KEYBOARD DONE RIGHT, WITH MORE TO COME LATER`,
            description: `The idea behind the Tokyo60 was to create a keyboard that focuses on one design, one layout, and a handful of colors, rather than offering countless combinations that can lead to complications. Everything from the feel of the case to the anodized finish to the sound of bottoming out is a reflection of the time and effort that went into the design. For this fourth run (Season 4), we’re offering two new case colors and the return of the Tokyo60 Season 2 dye-subbed keycaps (with the coral Fn key from Season 3). In future Seasons, we’ll be expanding the offering with more colors and accessories. Stay tuned!`,
            priority: 1,
          },
          {
            title: `PROGRAMMABILITY, BACKLIGHTING, & SWITCHES`,
            description: `Though it comes fully programmed (once you assemble it), the Tokyo60 can be completely reprogrammed via QMK firmware. It also has customizable RGB underglow visible with an optional acrylic diffuser. You can position the acrylic diffuser on the bottom or sandwich it between the aluminum pieces, depending on your style. What’s more, at checkout, you’ll be able to add a wide range of switches to get just the feel you want.`,
            priority: 1,
          },
        ],
      },
      specifications: {
        specs: [
          { text: `60 keys`, priority: 1 },

          { text: `CNC chassis with integrated plate`, priority: 1 },
          {
            text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
            priority: 1,
          },

          {
            text: `2-piece aluminum construction (high-profile 6000 series)`,
            priority: 1,
          },
          { text: `5º case angle with chamfered edges`, priority: 1 },
          { text: `HHKB-style layout`, priority: 1 },
          { text: `Designed in Tokyo`, priority: 1 },
          {
            text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
            priority: 1,
          },
          {
            text: `Compatible with MX style switches (plate and PCB mount)`,
            priority: 1,
          },
          { text: `Cherry profile dye-sublimated keycaps`, priority: 1 },
          {
            text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
            priority: 1,
          },
          { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 1 },
        ],
        included: [
          {
            text: `Keyboard`,
            priority: 1,
          },
          {
            text: `Removable magnetic feet`,
            priority: 1,
          },
          {
            text: `USB-A-to-C cable`,
            priority: 1,
          },
          {
            text: `Switch puller`,
            priority: 1,
          },
          {
            text: `Keycap puller`,
            priority: 1,
          },
        ],
      },
    },
  };

  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductData() {
  return useContext(ProductContext);
}
