# Portfolio project inventory

Generated: 2026-06-12  
Primary GitHub account checked: `Montorin`  
Purpose: source document for choosing which projects to showcase and how to structure the portfolio website.

## High-level inventory

| Project | Source | Type | Status for portfolio |
| --- | --- | --- | --- |
| Dollhouse | Perforce history from older Codex thread | Unreal Engine game project | Strong case study candidate |
| Project-U | GitHub + local clone | Godot / GDScript game prototype | Good case study candidate |
| Restaurant-Recommender | GitHub + local clone | React + Express web app | Good full-stack case study candidate |
| StudentSurvivors | GitHub + local recycle-bin copy | Unity / C# survivor game | Strong game portfolio candidate |
| Project-Andeid / Project Aeneid / Bomba | GitHub + local C++ solution | C++ console combat prototype | Good systems/programming candidate |
| INF111_TP1 | GitHub | Java client-server delivery app | Good academic/software engineering candidate |
| INF-111-travail-pratique-2 | GitHub | Java client-server delivery app with Swing UI | Good academic/software engineering candidate |
| CreativeJam2024 | Local PC scan | Unreal Engine 5.4 game jam project | Candidate if screenshots/build are available |
| OpenGL | Local PC scan | C++ OpenGL/GLFW learning project | Smaller technical candidate |
| Previous portfolio site | Local PC scan | Static HTML/CSS/JS portfolio | Useful archive and content source |
| LibraryApplication | Local PC scan | C# console/WinForms library app suite | Archive/learning candidate |
| SimpleCalculator suite | Local PC scan | C# calculator iterations | Archive/learning candidate |
| Early Visual Studio projects | Local PC scan | C#/C++ learning projects | Probably archive only |

## Confirmed public GitHub repositories

Public repos found on `Montorin` on 2026-06-12:

- `Montorin/Project-Andeid`: https://github.com/Montorin/Project-Andeid
- `Montorin/StudentSurvivors`: https://github.com/Montorin/StudentSurvivors
- `Montorin/Restaurant-Recommender`: https://github.com/Montorin/Restaurant-Recommender
- `Montorin/Project-U`: https://github.com/Montorin/Project-U
- `Montorin/INF111_TP1`: https://github.com/Montorin/INF111_TP1
- `Montorin/INF-111-travail-pratique-2`: https://github.com/Montorin/INF-111-travail-pratique-2

The older local repo `Montorin/MohamadNajibJalloul.github.io` returned 404 through the GitHub API, so I am treating it as local-only unless it is restored or moved.

## Project details

### Dollhouse

Source evidence:

- Older Codex thread titled `List Perforce commit history`
- Perforce report: `C:\Users\moham\Documents\Codex\2026-05-12\pull-all-the-commits-i-did\perforce_chronological_changes.md`
- Perforce user used for the report: `EXT_NAD_20253_mjalloul`
- Perforce server: `ssl:helixa.uqac.ca:1666`
- 46 submitted changelists, 98 changed file entries
- Date range: 2025-10-22 to 2026-05-02

What the project appears to be:

- Unreal Engine game project centered on a dollhouse / room-based puzzle experience.
- Work was mainly in Unreal assets and Blueprints: player character, cameras, room logic, mirror/light puzzle actors, UI widgets, level maps, and VFX.

Major systems and work completed:

- Controller and input work:
  - Saved x/y thumbstick values.
  - Added visual thumbstick value reader.
  - Added `IA_Look` and adjusted input mapping contexts.
- Camera systems:
  - Created and iterated on `BP_RoomCamera`.
  - Moved room camera behavior into maps and level assets.
  - Created `BP_FollowCam2D` and later `BP_FollowCam`.
  - Fixed room-to-room camera assignment and startup room camera behavior.
  - Adjusted follow camera overlap/location logic and nudge behavior.
- Joystick minigame:
  - Implemented a testable joystick minigame.
  - Added controller rumble.
  - Randomized held directions.
  - Added dot product averaging for joystick accuracy.
  - Reset dot product state after minigame completion.
  - Prevented movement while in the minigame.
- Mirror and light puzzle:
  - Added `BP_LightSource`, `BP_LightSourceReceiver`, and `BP_Mirror`.
  - Built mirror interaction through right trigger and right thumbstick rotation.
  - Blocked player movement while interacting with mirrors.
  - Added Y-axis mirror rotation, deadzone logic, and cleanup of player-to-mirror rotation calls.
  - Fixed infinite-call behavior in mirror/light tracing.
  - Added actor ignore arrays and improved efficiency around mirror trace logic.
  - Fixed mirror VFX and integrated it with level/pulley actors.
- Level and polish work:
  - Worked in `Lvl_DollHouse`, puzzle sublevels, lighting sublevels, teaser maps, and camera test maps.
  - Fixed missing asset warnings.
  - Added a brightness settings option through pause/settings UI widgets.

Portfolio angle:

- Best framed as a feature-by-feature game systems case study.
- Strong sections: camera architecture, puzzle interaction, controller feel, input debugging, iteration from prototype to level integration.
- Suggested website assets: gameplay clip of mirror puzzle, room camera transition clip, screenshots of level rooms, short changelist timeline.

### Project-U

Source evidence:

- GitHub: https://github.com/Montorin/Project-U
- Local path: `C:\Users\moham\Project-U`
- Main language: GDScript
- Important files: `project.godot`, `Scripts/DungeonSpawn.gd`, `Scripts/player.gd`, `Scripts/room.gd`, `Scenes/main.tscn`, `Scenes/Player.tscn`, `Scenes/Room.tscn`, `Scenes/weapon.gd`

What the project appears to be:

- Godot 2D game prototype with procedural dungeon/room generation.

Major systems and work completed:

- Player controller:
  - `CharacterBody2D` movement.
  - Keyboard directional input.
  - Player group registration for room triggers.
- Dungeon generation:
  - Configurable dungeon dimensions.
  - Configurable or random start position.
  - Critical path generation.
  - Branch generation with branch candidates and variable branch length.
  - Room scene spawning.
  - Player scene spawning.
- Room behavior:
  - Room discovery state.
  - Room trigger detects the player.
  - Current room is set when entered.
  - Camera moves to the entered room.
  - Exit collision shapes are enabled/blocked depending on neighboring generated rooms.
  - Fade helper for room child CanvasItems.
- Content:
  - Player sprites.
  - Weapon sprites including sword/staff attack and shot frames.
  - Dedicated room/player/weapon scenes.

Recent GitHub activity:

- `Update DungeonSpawn.gd` on 2026-03-04.
- Earlier commits mention dungeon size variation, state updates, weapon updates, and initialization.

Portfolio angle:

- Best framed as a procedural generation prototype.
- Strong sections: grid generation, critical path + branches, room spawning, room camera, player exploration.
- Suggested website assets: generated dungeon diagram, short gameplay GIF, code snippet of dungeon parameters.

### Restaurant-Recommender

Source evidence:

- GitHub: https://github.com/Montorin/Restaurant-Recommender
- Local path: `C:\Users\moham\restaurant-recommender`
- Main language: JavaScript
- Important files: `backend/server.js`, `backend/package.json`, `frontend/src/App.js`, `frontend/src/RecommendationForm.js`, `frontend/src/Results.js`

What the project appears to be:

- Full-stack restaurant recommendation app with a React frontend and Express backend.
- Uses Google Places nearby search through a backend API.

Major systems and work completed:

- Frontend:
  - React app with stateful restaurant results.
  - Recommendation form component.
  - Results component that lists name, vicinity, distance, rating, and price level.
  - Browser geolocation to prefill latitude and longitude.
  - User filters for cuisine, price, diet, radius, and place type.
- Backend:
  - Express API route: `GET /restaurants`.
  - CORS enabled for frontend/backend communication.
  - `dotenv` for configuration.
  - Axios call to Google Places API.
  - Diet keyword mapping for vegan, vegetarian, gluten-free, halal, kosher, paleo, and keto.
  - Price level mapping.
  - Distance calculation with `geolib`.
- Dependencies:
  - Backend: `express`, `axios`, `cors`, `dotenv`, `geolib`.
  - Frontend: React 19, React DOM, Axios, React Scripts.

Recent GitHub activity:

- `Create Procfile.txt` on 2025-07-08.
- Earlier commits include backend changes and server fixes.

Portfolio angle:

- Best framed as a full-stack web app.
- Strong sections: user input flow, location-aware search, external API integration, backend filtering, result presentation.
- Suggested website assets: form screenshot, result list screenshot, architecture diagram showing React -> Express -> Google Places.

### StudentSurvivors

Source evidence:

- GitHub: https://github.com/Montorin/StudentSurvivors
- Local scan also found a deleted/recycle-bin copy.
- Main reported GitHub language: ShaderLab, with C# and HLSL.
- Important files: `Assets/Scripts/GameManager/GameManager.cs`, `Assets/Scripts/Assests/Player.cs`, `Assets/Scripts/Weapon/BaseWeapon.cs`, weapon scripts, enemy scripts, save data, UI text/bar scripts.

What the project appears to be:

- Unity top-down survivor / bullet-hell style game.
- README identifies it as by Mohamad-Najib Jalloul at LaSalle College.

Major systems and work completed:

- Gameplay loop:
  - Enemy spawning through object pools.
  - Timer display.
  - Coin display.
  - Player death handling and scene return to title.
  - Audio triggers for crystal and level events.
- Player systems:
  - HP and max HP.
  - Invincibility coroutine after damage.
  - Player choice changing animator controller and starting weapon.
  - Speed and HP upgrades pulled from saved data.
  - EXP and leveling variables.
- Weapons:
  - Base weapon level-up activation.
  - Weapon scripts for katana, scythe, shield, vortex, pool, hot wheel, cooldown, duration, and spawners.
- Enemies and pickups:
  - Boss, enemy, coin, crystal, magnet, apple, blueberry scripts.
- UI/progression:
  - EXP bar/text, enemy text, death text, boss text, HP bar, title manager, upgrade coin text.
- Build/release:
  - Commits mention WebGL builds and final changes for WebGL.

Recent GitHub activity:

- Final WebGL-oriented commit on 2022-12-13.
- Other recent commits mention making it easier to play, WebGL build, and post-processing.

Portfolio angle:

- Strong game portfolio piece if a playable build or video exists.
- Strong sections: object pooling, weapon progression, enemy spawning, save/progression data, WebGL deployment.
- Suggested website assets: gameplay clip, weapon/equipment montage, WebGL link if the build can be restored.

### Project-Andeid / Project Aeneid / Bomba

Source evidence:

- GitHub: https://github.com/Montorin/Project-Andeid
- Local path: `C:\Users\moham\source\repos\Bomba`
- Main language: C++
- Important files: `Project Anedeid.cpp`, `Combat.cpp`, `Character.h`, `Player.h`, `Enemy.h`, `Crystal.h`, `LightCrystal.h`, `VoidCrystal.h`

What the project appears to be:

- C++ Visual Studio console combat prototype for a fantasy/RPG-style system.

Major systems and work completed:

- Main program creates a `Player` named `Magician` and an `Enemy` named `Corrupted Beast`.
- Combat loop alternates player and enemy turns until one character dies.
- Player turn:
  - Initiative check can skip the turn.
  - Menu lets player attack or defend.
- Enemy turn:
  - Initiative check can skip the turn.
  - Enemy attacks player.
- Character model:
  - Attributes include speed, toughness, vitality, precision, strength, initiative, and mana.
  - Supports attack, damage intake, defend, alive check, initiative check, and crystal use.
- Crystal model:
  - Abstract `Crystal` type with polymorphic `use`.
  - Light and Void crystal specializations.

Portfolio angle:

- Best framed as a C++ systems/prototype piece rather than a finished game.
- Strong sections: object-oriented design, turn-based combat loop, inheritance/polymorphism, resource/mana-based abilities.
- Note: repo/project names have spelling variants: `Project-Andeid`, `Project Anedeid`, and local `Project Aeneid`.

### INF111_TP1

Source evidence:

- GitHub: https://github.com/Montorin/INF111_TP1
- Description: `Application client-serveur pour la gestion des livraisons`
- Main language: Java
- Important folders: `MiniClient`, `MiniServer`
- Important classes: `GestionnaireLivraisons`, `FilePrioriteLivraisons`, `ListeChaineeLivreurs`, `ListeLivraisons`, `Livreur`, `LivreurCamion`, `LivreurVelo`, `LivreurVoiture`, networking/event classes, tests.

What the project appears to be:

- Java Maven client-server delivery management application.
- Group project with Mohamad-Najib Jalloul, Felix Mallet, and Rajith Rajathurai.

Major systems and work completed:

- Client-server architecture:
  - `MiniClient` and `MiniServer` modules.
  - Shared event, arguments, connection, and text-listener classes.
- Delivery management:
  - Registered couriers read from `livreurs.txt`.
  - Authenticated couriers stored by active connection.
  - Deliveries to perform stored in a priority queue.
  - Failed deliveries tracked separately.
  - Delivery factory populates initial delivery data.
- Data structures:
  - Linked-list courier structure.
  - Delivery list structure.
  - Priority queue for delivery ordering.
- Testing:
  - Test classes for priority queue, courier linked list, delivery list, and general test harness.

Portfolio angle:

- Best framed as a Java networking + data structures project.
- Strong sections: event-driven client-server communication, custom collections, delivery domain model, tests.

### INF-111-travail-pratique-2

Source evidence:

- GitHub: https://github.com/Montorin/INF-111-travail-pratique-2
- Main language: Java
- Important folders: `MiniClient`, `MiniServer`
- Important classes/folders added beyond TP1: `com/vue`, `com/controleur`, `com/observer`, `MiniServerUI`, `PanneauLivraisons`, `PanneauLivreurs`, `PanneauConsole`, `StatistiquesDialogue`, `InfoLivreurDialogue`, `AjoutLivraisonDialogue`

What the project appears to be:

- Continuation of the Java delivery management client-server app with a richer desktop UI and observer/controller architecture.

Major systems and work completed:

- Retains TP1-style client-server delivery management.
- Adds Swing GUI:
  - Main application window titled `Gestionnaire de livraisons`.
  - Menu action for adding deliveries.
  - Panels for couriers, deliveries, and console output.
  - Dialogs for adding delivery, courier info, and statistics.
- Adds controller layer:
  - Menu application listener.
  - Courier list listener.
- Adds observer pattern:
  - `Observable` and `Observateur`.
  - `GestionnaireLivraisons` extends `Observable` and notifies observers.
- Delivery manager improvements:
  - Explicit initialization phase.
  - Trace/log field.
  - Delivery priority queue can be repopulated.

Recent GitHub activity:

- Final README update on 2026-04-25.
- Commits mention file path fix and staged assignment questions/features.

Portfolio angle:

- Stronger showcase than TP1 because it adds architecture and UI.
- Suggested framing: "Java desktop client-server delivery manager with observer-driven Swing UI."

### CreativeJam2024

Source evidence:

- Local path: `C:\Users\moham\Documents\Unreal Projects\CreativeJam2024`
- Unreal project file: `CreativeJam2024.uproject`
- Engine association: Unreal Engine 5.4
- Content folders include `1_GAME`, `Characters`, `GamJam`, `LevelPrototyping`, `PostProcess`, `SubLevels`, `VFX`, `ThirdPerson`.

What the project appears to be:

- Unreal Engine 5.4 game jam project, likely a haunted-house themed game.

Major systems/content visible from file names:

- Maps:
  - `HauntedHouse.umap`
  - `TitleScreen.umap`
- Blueprints:
  - `BP_Breaker`
  - `BP_Camera`
  - `BP_EnemyNpc`
  - `BP_FriendlyAlly`
  - `BP_LightTrack`
  - `BP_MainGamemode`
  - `BP_Room`
  - `BP_SwitchesButton`
  - `MainCharacter`
  - UI and sound blueprints.
- Assets:
  - Materials, post process, sound, static mesh, textures, UI.
  - Characters including bunny, monster, mannequins, breaker assets.

Portfolio angle:

- Good visual/game jam candidate if there are screenshots or a playable build.
- Needs content review in Unreal or screenshots to avoid guessing too much from asset names.

### OpenGL

Source evidence:

- Local path: `C:\Users\moham\Desktop\OpenGL`
- Visual Studio solution: `OpenGL.sln`
- Important files: `OpenGL/main.cpp`, `glad.c`, `glfw3.dll`

What the project appears to be:

- C++ OpenGL setup/learning project using GLAD and GLFW.

Major systems and work completed:

- Initializes GLFW.
- Requests OpenGL 3.3 core profile.
- Creates an 800x600 window.
- Loads OpenGL functions through GLAD.
- Sets viewport and framebuffer resize callback.
- Handles Escape key to close the window.
- Runs a render loop with clear color and buffer swap.

Portfolio angle:

- Best as a smaller technical learning entry or archive item.
- Useful to show graphics fundamentals if later expanded with screenshots or more rendering work.

### Previous static portfolio website

Source evidence:

- Local path: `C:\Users\moham\Desktop\Web Portfolio Git\MohamadNajibJalloul.github.io`
- Files: `index.html`, `about.html`, `projects.html`, `css`, `js`, `img`, `video`
- GitHub remote points to `Montorin/MohamadNajibJalloul.github.io`, but that repo is not currently public.

What the project contains:

- Static HTML/CSS/JS portfolio website for Mohamad-Najib Jalloul, Game Developer.
- Navigation: Home, About, Projects.
- Interactive project detail cards in `ProjectScript.js`.

Projects documented inside that old portfolio:

- Tank Shooter:
  - Tank shooting game written in C++.
  - Completed: movable tank, turret enemies, smooth aiming/movement.
  - Not completed: complete level flow, score system, death screen, main menu.
  - Learned: Unreal C++ classes, Unreal Engine library, C++/Blueprint relationship.
- Solaris Assault:
  - 2D top-down bullet hell.
  - Completed: multiple enemies, multiple player abilities, boss at end of level.
  - Not completed: developed skill tree, multiple levels, sound system.
  - Learned: Unity pipeline, Unity library, object pooling.
- Zombie Arcade:
  - Unity/Unreal-style zombie arcade project inspired by Call of Duty Zombies.
  - Completed: responsive gameplay, round-based enemy progression, main menu, death screen.
  - Not completed: multiple weapons, economy system, special enemies.
  - Learned: Unreal Engine, Quixel/importing files, line tracing.

Portfolio angle:

- Useful as content source, but the new site should not simply reuse the old design.
- The listed projects can become short archive cards or be promoted if builds/screenshots exist.

### LibraryApplication

Source evidence:

- Local path: `C:\Users\moham\source\repos\LibraryApplication`
- Visual Studio solution with multiple iterations:
  - `LibraryApplication`
  - `LibraryApplicationV2`
  - `LibraryApplicationV3`
  - `LibraryApplicationV4`
  - `LibraryApplicationV5`
  - `LibraryWinForms`
  - `LibraryWinFormsV2`

What the project appears to be:

- C# library-management learning project, evolving from console versions to WinForms versions.

Visible systems:

- `Book.cs` business object in later versions.
- WinForms UI in `Form1.cs`.
- Login form in `LibraryWinFormsV2`.
- Client/business folder separation in later versions.

Portfolio angle:

- Better as a learning progression/archive item unless a final WinForms version is polished.

### SimpleCalculator suite

Source evidence:

- Local path: `C:\Users\moham\source\repos\SimpleCalculator`
- Visual Studio solution with versions `SimpleCalculator` through `SimpleCalculatorV5`.

What the project appears to be:

- C# calculator learning project with repeated iterations.

Visible systems:

- Later versions split business logic into `bus/Calculator.cs` and client logic into `client/Program.cs`.
- Calculator supports sum, subtraction, multiplication, division, and modulo.

Portfolio angle:

- Best as a short "early foundations" archive item, not a featured project.

### Other local scan candidates

The prior PC inventory also found these candidates:

- `SimpleCalculatorV2`: separate C# calculator solution.
- `Myfirstprojectwithcplusplus`: Visual Studio learning suite with early C#/C++ projects.
- `Project1`: Visual Studio project, details not yet inspected.
- `Bon matin`: Visual Studio project, details not yet inspected.

Portfolio angle:

- Keep out of the main portfolio unless you specifically want an early-learning section.

## Suggested website grouping

Recommended featured projects:

1. Dollhouse
2. StudentSurvivors
3. Project-U
4. Restaurant-Recommender
5. INF-111 Travail Pratique 2
6. Project Aeneid / Project-Andeid

Recommended secondary/archive projects:

- CreativeJam2024
- INF111_TP1
- OpenGL
- Tank Shooter
- Solaris Assault
- Zombie Arcade
- LibraryApplication
- SimpleCalculator suite

Recommended navigation model:

- Home / Featured Work
- Project Case Studies
- Development Journal
- Archive
- About / Contact

Recommended case study template:

- One-line project pitch
- Role and context
- Tools/technology
- What I built
- Technical highlights
- What I learned
- Media/screenshots/video
- Links: GitHub, playable build, PDF/report if available

## Free hosting options

Yes, I can help host the final portfolio online for free once the website exists.

Best default for this portfolio:

- GitHub Pages, because the site can be static and your projects are already on GitHub.
- Official GitHub Pages docs describe it as static hosting for HTML, CSS, and JavaScript directly from a GitHub repository: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Pages also supports publishing from a branch or GitHub Actions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Other free options:

- Netlify has a Free plan and can deploy from Git or API: https://www.netlify.com/pricing/
- Vercel has a free Hobby plan for personal projects and small-scale applications: https://vercel.com/docs/plans/hobby

What I would need from you to publish it:

- Decide whether the site should be hosted as `Montorin.github.io`, a project site such as `Montorin.github.io/portfolio`, or a custom domain.
- Give me permission to create or update the GitHub repository that will hold the portfolio.
- If you want me to push/deploy directly, GitHub auth must be available in Codex or through local Git credentials.
- Provide or approve media assets: screenshots, gameplay clips, project images, downloadable builds, and any links you want public.
- Confirm which projects should be featured versus archived.

Recommended deployment path:

1. Build the site as a static site in this workspace.
2. Push it to a GitHub repository.
3. Enable GitHub Pages from the repository settings or through a GitHub Actions workflow.
4. Use GitHub Pages first. Use Netlify or Vercel only if the final design needs richer preview/deploy workflows or framework-specific hosting.

## Open questions for the next step

- Which projects should be featured on the first screen?
- Do you want a game-developer-first identity, a general software-developer identity, or a split game/web/software portfolio?
- Do you have screenshots/videos/build links for Dollhouse, StudentSurvivors, Project-U, CreativeJam2024, Tank Shooter, Solaris Assault, or Zombie Arcade?
- Should the Dollhouse Perforce journal be public in full, summarized as a timeline, or hidden behind a "development log" page?
- Should academic/team projects list collaborators by name, or keep the focus on your own role?

