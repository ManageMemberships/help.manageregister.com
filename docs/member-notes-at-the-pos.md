---
sidebar_position: 9
---

# Member Notes at the POS

A member note is a short message that appears on the Cashier screen whenever that member is on a sale. Use it to tell the next cashier something they need to know.

A note only warns. It does not block the sale. To block a sale, see [Paused and Inactive Members](./paused-and-inactive-members.md).

---

## Adding a Note

1. Open **Member > Create Member**, or open an existing member from **Member > Edit**.
2. In the **Notes** section, type your text in **Member Notes**.
3. Save the member.

The section is described as "Shown prominently at the POS when this member is on a sale."

Quick Add Member has no notes field. Add the note afterward from **Member > Edit**.

---

## What Staff See

### The Pop-up

When you pick a member who has a note, a yellow pop-up appears over the Cashier with:

- The heading **Member Note** and a pin
- The member's name
- The note text
- One button, **I Acknowledge**

How it behaves:

- It appears each time the member is picked in the Cashier member field. It also appears each time you pick an additional shooter for the sale, and when you pick a customer on a quote.
- It cannot be closed without clicking **I Acknowledge**.
- The acknowledgement is not recorded anywhere.
- Adding a member with **Quick Add Member** does not show it, because a new member has no note yet. After you add a note from **Member > Edit**, picking that member shows the pop-up like any other.

### The Banner

A yellow **Member Note** banner also shows in **Order details** for as long as the member is on the sale. It shows the member's name and the note. If a second shooter also has a note, both are listed.

### Inactive Members

If the member is inactive, the **INACTIVE MEMBER - TRANSACTION BLOCKED** pop-up also shows their note, under **Member Note**. See [Paused and Inactive Members](./paused-and-inactive-members.md).

---

## Members in ManageMemberships

A member who also exists in ManageMemberships keeps their notes there.

- ManageRegister shows the newest 3 notes, one line each, as **date - note**. Text longer than 500 characters is cut off.
- A change made in ManageMemberships can take about a minute to appear. Search for the member again in the Cashier to see it.
- A note you save in ManageRegister for one of these members is sent to ManageMemberships and added there as a new note. You see **Note synced to MM.** If ManageRegister can't reach ManageMemberships, you see an error message instead.
- ManageMemberships is the master copy. If the two differ, the next sync replaces the ManageRegister text with what ManageMemberships has.

The Notes box says edits sync back to ManageMemberships automatically. That only applies to members who exist in ManageMemberships. Notes on a member created only in ManageRegister stay in ManageRegister. See [Members and Guests](./members-and-guests.md).

For how notes are added and who can edit them in ManageMemberships, see the ManageMemberships help: **Members**.

---

## Example Uses

| Use | Example note |
|-----|--------------|
| Suspicious purchase | Manager to review before the next sale. |
| Owes money | Owes a balance from last visit. Collect before a new sale. |
| VIP | Regular customer. Greet by name. |

---

## Tips

- Keep notes short and factual. The pop-up and banner are on the screen at the counter.
- ManageRegister shows only the newest 3 notes for a ManageMemberships member, so put the most important message in the most recent note.
- A note does not stop a sale. If a customer must not be sold to, mark them inactive in ManageMemberships. See [Paused and Inactive Members](./paused-and-inactive-members.md).
