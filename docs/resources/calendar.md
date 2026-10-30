---
sidebar_position: 2
---

# Calendar

The Calendar provides a visual scheduling interface for booking resources, classes, and events. It integrates with ManageMemberships to show availability and handle reservations.

---

## Using the Calendar

1. Go to **Resources > Calendar**.
2. You'll see a calendar view showing available time slots for each resource.
3. Click and drag on a time range to start a new booking.

---

## Moving and Editing Bookings

Drag a booking to move it, drag its edge to change its length, or click it to edit or delete it. Moving a booking that came from a quote updates the quote too.

Users whose role lacks `manage range bookings` (such as RSO) can view the calendar and open bookings, but can't create, move, edit or delete them.

---

## Keeping Up to Date

While the Calendar is open, it refreshes itself every 30 seconds. Changes you make here, such as new, moved or deleted bookings and blocked time, show straight away. A booking made in ManageMemberships, for example by a member online, can take up to about a minute to appear.

---

## Blocked Time and Privacy

To block a resource, select a time range and click **Mark Resource Unavailable**, then enter a reason (e.g. "ATF TRAINING"). To remove a block, click it and confirm.

Who sees the reason depends on their role:

| Tier | What they see | Default roles |
|------|---------------|---------------|
| **Visible** | "Unavailable - ATF TRAINING" | Admin, Manager, staff |
| **Click to reveal** | "Unavailable". Clicking the block offers **Show** | Front Desk |
| **Hidden** | "Unavailable" only | RSO, Receipt Counter |

Members never see the reason. To hide reasons from ManageMemberships staff as well, turn on **Hide Unavailable Reasons From Staff** in ManageMemberships under Portal Settings > Privacy & Access.

Change who sees what on the [Roles](../user/roles.md) screen.

---

## Tips

- Review the calendar daily to stay on top of upcoming bookings and blocked time.
- Make sure resources are configured and active on ManageMemberships for them to appear here.
