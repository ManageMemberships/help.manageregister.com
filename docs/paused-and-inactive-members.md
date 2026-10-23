---
sidebar_position: 7.5
---

# Paused and Inactive Members

The Cashier warns you when a member's membership is paused or inactive. A paused member shows a notice, and the sale can still go through. An inactive member blocks the sale until they are reactivated.

---

## Where the Status Comes From

A member's status is set in ManageMemberships. The register reads it when you search for a member in the Cashier.

- A change in ManageMemberships can take up to about a minute to show up here.
- Search for the member again to see the new status.
- A member already in the cart keeps the old status until you search for them in the Cashier again. Reloading the page does not update it.

---

## Paused Members

### What You See

1. In the Cashier member search, a paused member's line in the results ends with a tag, for example **[MEMBERSHIP PAUSED UNTIL DEC 15, 2026]**. With no resume date, the tag is **[MEMBERSHIP PAUSED]**.
2. After you add the member, a notice appears at the top of the cart panel, above **Order details**:
   - Heading: **MEMBERSHIP PAUSED UNTIL DEC 15, 2026** (or **MEMBERSHIP PAUSED** with no resume date).
   - Second line: the member's name, followed by text saying range access and class booking are paused. The banner also says the member can still be sold to at guest rates.

The mention of guest rates is wording only. The register does not change prices because of a pause, so a paused member is charged the same price that applies to them normally.

The notice is for information only. It does not block the sale. **Proceed to payment** works as normal. Staff cannot clear the notice.

The Calendar and Class Booking pages do not show a paused warning. The notice appears when you add the member in the Cashier.

### What to Do

1. If the member was already in the cart when the pause started or ended, search for the member again in the Cashier and click **Save**. The notice updates without clearing the cart.
2. Follow your gym's policy for paused members, for example no lane or class bookings.

The notice goes away after the pause is ended in ManageMemberships and you search for the member again.

---

## Inactive Members

### What You See

1. Under the member's name in the cart, red text: **⚠ USER IS INACTIVE**.
2. A full-screen popup with the heading **INACTIVE MEMBER - TRANSACTION BLOCKED**:
   - "One or more members are INACTIVE and cannot complete transactions. Please contact ManageMemberships.com to reactivate their membership."
   - For each inactive member: "&lt;name&gt; is INACTIVE", then the **REASON** (when ManageMemberships provides one), then the **MEMBER NOTE** if the member has one.
   - "This transaction cannot proceed until the member(s) are reactivated."

The popup has one button, **Clear Cart & Remove Members**. It clears the cart and removes the members. There is no close button.

### What Is Blocked

While an inactive member is in the cart, the popup covers the screen, so the sale cannot go through.

There is no manager override for this.

The Calendar and Class Booking pages do not show an inactive warning. The block happens when you add the member in the Cashier.

### Reasons You May See

The **REASON** comes from ManageMemberships:

- **Deactivated by staff**
- **Awaiting approval**
- **Parent account inactive**
- **Payment failed**
- **Membership canceled**
- **Membership ended**
- **Inactive - reason not recorded**

**Membership canceled** and **Membership ended** also show a date, for example (Oct 2, 2026).

### Getting the Member Reactivated

1. Click **Clear Cart & Remove Members**. This also empties the cart, so you will need to add the items again.
2. In ManageMemberships, open the member and turn the **Active** switch back on. You need access to ManageMemberships to do this.
   - If the **REASON** is **Awaiting approval**, use **Approve Member** instead. The member then gets an email with a payment link.
3. Wait about a minute.
4. Search for the member again in the Cashier and add them back to the cart.

---

## At a Glance

| Status | What staff see | Can the sale go through? |
|--------|----------------|--------------------------|
| **Paused** | Tag in the member search and a notice at the top of the cart panel | Yes. The notice is information only |
| **Inactive** | **⚠ USER IS INACTIVE** and the **INACTIVE MEMBER - TRANSACTION BLOCKED** popup | No. The popup blocks the sale until the member is reactivated in ManageMemberships |

---

## Tips

- After any change in ManageMemberships, wait about a minute and search for the member again.
- Read the **REASON** in the inactive popup. It tells you why the member was blocked.
- If the member has a note, it shows in the popup.
- The Calendar and Class Booking pages don't warn about paused or inactive members. Watch for the warnings when you add the member in the Cashier.
