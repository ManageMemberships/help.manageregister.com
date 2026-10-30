---
sidebar_position: 7.7
---

# Account Check & Checked In

**Account Check** looks someone up at the front desk without starting a sale. From it you can see their waivers, ID and citizenship, fix what's missing, and check them in to shoot, for a class, or for an agency's range booking. **Checked In** is the list of everyone checked in to shoot today, red, yellow or green. Green people go straight onto the RSO's Firing Line board.

Both buttons sit under the products on the **Cashier** page. They show when your register is connected to ManageMemberships.

---

## Looking Someone Up

1. Click **Account Check**. It opens straight away.
2. Type at least two letters of their name or email, then click them in the results.
3. You'll see:
   - **Waivers**: each one ✓ signed or ✗ not signed. **Sign Now** lets them sign on the spot.
   - **ID** and **citizenship**, with the **Verify ID** and **Verify citizenship** buttons.
   - Warnings: **⚠ ID NOT CHECKED** (your gym requires an ID check and nobody has checked theirs), **⚠ NEEDS SAFETY BRIEFING** with a **Print briefing ticket** link next to it, and **USER IS INACTIVE**. The **UNDER 18** / **UNDER 21** badge shows next to their name. See [Age Badge](./age-badge.md) and [Safety Briefing](./safety-briefing.md).
   - For a member whose membership payment failed, at a gym that [sells to them as a guest](./paused-and-inactive-members.md#selling-to-them-as-a-guest-optional): **⚠ MEMBERSHIP PAST DUE: charged as a guest until paid** in amber, instead of USER IS INACTIVE.
4. Click **Look up someone else** to start over.

### Collecting an Overdue Membership Balance

When a member's membership payment failed and ManageMemberships says how much they owe, a green **Collect $25.00 overdue** button shows under their warnings. It works whether or not your gym sells to them as a guest.

Click it. Account Check closes, the member is put on the sale, and the overdue balance goes into the cart at the amount ManageMemberships shows right now. Take the payment as normal. Paying it brings them current in ManageMemberships.

If the balance can't be collected at the register, for example when ManageMemberships shows nothing owed, Account Check stays open and a message says why.

Members inactive for any other reason don't get the button. See [Paused and Inactive Members](./paused-and-inactive-members.md).

Owners and managers, and any role that can change members, get the verify buttons and the override buttons below.

---

## Checking Someone In

Pick what they're here for under **Check in for**, then click **Check in**. When it works, the window closes and a green message confirms it. When it's refused, the window stays open and says why, so you can fix it and try again.

### To shoot today

Pick **Range: shooting today**.

- **Party name** (optional): type the same name, e.g. *Reyes*, for everyone shooting together. Parties show together on the Checked In list with how many lanes they need, and go onto the RSO's board as one party.
- **Needs to pay for a lane**: checked for guests. It starts unchecked for members, whose lane is part of their membership. At a gym that [sells to members who owe as guests](./paused-and-inactive-members.md#selling-to-them-as-a-guest-optional), it also starts checked for a member whose membership payment failed. You can always change it.
- **Under 18**: pick **Parent or legal guardian is here** or **Guardianship form received (paper or emailed)**. They can't be checked in until you do.
- **No birth date on file**: pick **18 or older (checked their ID)**, or how a minor is covered.

They go on the [Checked In list](#the-checked-in-list).

### For a class

Today's classes are listed by name and start time, with where this person stands:

| Shows | Means |
|-------|-------|
| **(booked, paid)** | They booked or bought this class. It's already picked for them. |
| **(booked, NOT PAID)** | They booked to pay at the door and haven't paid yet. |
| **(not paid, $40.00)** | They haven't booked, and the class costs them that much. |
| nothing | The class is free for them. |

**A class has to be paid for before they can be checked in.** If they haven't paid, Check in is refused and the window says so.

- **Not booked:** click **Collect payment**. It books their seat, or says the class is full, and puts the class in the cart with them as the customer, at their member price. Take the payment, then check them in.
- **Booked but not paid:** collect the payment at the counter before checking them in.

Someone whose membership makes the class free, or whose membership gives them check-in credits, isn't asked to pay.

Checking them in marks their booking attended in ManageMemberships.

Where your gym requires citizenship verification for training, someone who hasn't been verified is refused. Check their documents, then click **I have verified their citizenship — check in**. That records the verification on their account in ManageMemberships, so they won't be asked again, and checks them in. A family or bundle member can't be verified on their own account, so staff get **Checked their proof of citizenship — check in anyway** instead, and the override is recorded.

### For an agency's range booking (contractors)

When an agency has closed lanes for a block of time, the block is listed as **Contractor: name, start–end**. Pick it to see how many people have checked in for it and who, then click **Check in**.

Contractors aren't charged and don't use a check-in credit. The agency pays for the range. They don't go on the Checked In list. Checking the same person in twice says they're already checked in and doesn't count them again.

### When a waiver isn't signed

Nobody is checked in with an unsigned waiver. Have them sign with **Sign Now**. If they signed on paper, staff get a **Checked their paper waiver — check in anyway** button. The override is recorded with who made it.

---

## The Checked In List

Click **Checked In (n)**. The number is how many people are on today's list.

| Color | Means |
|-------|-------|
| 🔴 Red | Still owes payment **and** the safety briefing |
| 🟡 Yellow | One of the two is left |
| 🟢 Green | Ready for a lane |

**Green people go onto the RSO's Firing Line board automatically**, whether they're green at check-in or turn green later. A party goes on together, so the board keeps them on one lane.

Each row has:

- **Collect payment**: puts the range product in the cart with that person as the customer and closes the list. Take the payment as normal, and they're marked paid when the sale completes.
- **Mark paid**: for when they paid some other way.
- **Print briefing ticket** and **Briefing done**: for the safety briefing. A ticket printed for someone in a party keeps them with their party when they scan out at the briefing kiosk. Someone who scans out is picked up the next time you open the list.
- **Remove**: takes them off today's list.

For a party, **One person paid for all** marks everyone in it paid.

Ringing up the range product for someone on the list, from the list or straight from the cart, marks them paid, as well as everyone else named on that sale.

The list starts fresh each day.

---

## Setup

- **Range product:** in [General Setting](./setting/general-setting.md), **App** tab, **Range & Booking Settings**, set **Range Reservation Product**. It's what **Collect payment** on the Checked In list adds to the cart, and what marks someone paid when it's sold.
- **Waivers, classes and their prices, citizenship and ID requirements, and agency bookings** all come from ManageMemberships. Change them there.
