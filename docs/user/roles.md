---
sidebar_position: 2
---

# Roles & Permissions

Every user has one role. The role decides which screens they can open, where they land after logging in, whether they see product costs, and whether their override PIN works.

---

## Built-in POS Roles

| Role | Lands on after login | Can open | Sees costs | Override PIN works | Can set override PINs |
|------|----------------------|----------|------------|--------------------|-----------------------|
| **Admin** (full access) | Dashboard | Everything, all views | Yes | Yes | Yes |
| **Manager** | Dashboard | Everything except users, roles, payment methods and app settings | Yes | Yes | No |
| **Front Desk** | Register Member | POS, front desk screens, range calendar (can move bookings) | No | No | No |
| **Receipt Counter** | Pending Pickup | Pending pickup queue; sales, members and products (read-only) | No | No | No |
| **RSO** | Range calendar | Range calendar (view only) | No | No | No |

**Admin** is the full-access role (what the contract calls "MORSS" / All Access): every screen, product costs visible, and its override PIN works. The original **staff** role still exists and can open every screen it could before.

---

## Assigning a Role

1. Go to **User > User** and edit the user.
2. Pick their **Role** and save.

The role sticks. Logging in no longer resets it. If a user is still on plain admin or staff, their ManageMemberships access level (manager/owner or staff) sets it at login, as before.

:::note
Everyone still needs a ManageMemberships login as staff, manager or owner to sign in to the register at all.
:::

---

## Adjusting a Role

Go to **User > Role** and edit a role to add or remove permissions. Some useful ones:

| Permission | What it does |
|------------|--------------|
| `access pos` | Open the POS |
| `access front desk` | Open Register Member and Classes & Events |
| `access receipt counter` | Open the Pending Pickup queue |
| `access range` | Open the range calendar |
| `manage range bookings` | Create, move, edit and delete bookings, and block or unblock time |
| `access dashboard` | See the Dashboard. Without it, users go straight to their workstation |
| `view_costs` | See product cost and margin |
| `approve manager override` | Let this role's override PINs approve protected actions |
| `manage manager_override` | Let this role set manager override PINs on a user's edit page |
| `view unavailable reasons` | See why time is blocked (e.g. "ATF TRAINING") |
| `reveal unavailable reasons` | See the reason only after clicking **Show** |

A role with neither of the last two sees blocked time as just "Unavailable". See [Calendar](../resources/calendar.md#blocked-time-and-privacy).

---

## Tips

- Pair roles with registers: limit each register to the roles that should use it. See [Cash Register](../setting/cash-register.md).
- Only roles with `approve manager override` can approve overrides, so give PINs to Admin and Manager users. Only roles with `manage manager_override` can set those PINs. See [Manager Override Codes](../setting/manager-override.md).
- Members who still need the range safety briefing are flagged at the POS. See [Safety Briefing](../safety-briefing.md).
