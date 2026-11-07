---
sidebar_position: 3
---

# Classes & Events

The Classes & Events page lets you book classes and events for members directly from the system. Pricing and availability are managed through your ManageMemberships.com integration.

---

## Booking a Class or Event

1. Go to **Classes & Events**.
2. Search for the **member** you want to book for.
3. Select the **class or event** from the available list.
4. Review pricing — the system automatically applies the correct rate based on the member's membership level.
5. Complete the booking using **Cash** as the payment method.

If the member has used up their monthly limit on classes booked in advance, the booking is refused. See [Advance Booking Limit](#advance-booking-limit).

---

## Pricing

- Pricing is pulled from ManageMemberships based on the member's membership tier.
- If no member is selected, default pricing will apply.

---

## Advance Booking Limit

Your gym can limit how many classes a member books in advance each month. It is the **Advance Booking Limit (per month)** on the member's membership level. An advance booking is a class more than 7 days away. A class within the next 7 days can always be booked.

The register tells ManageMemberships who is booking, and that decides what happens when a member is at their limit:

- A cashier who is a **connected** ManageMemberships owner or manager can book the member past their limit.
- Any other cashier is held to the limit.

### When a Booking Is Refused

A red **Booking Failed** notification shows with this message:

> This member has reached their advance registration limit (N per month). A manager or owner can book it.

N is the limit on the member's level. Nothing is added to the cart and no booking is made. The notification goes away after a few seconds.

If a manager sees it, they aren't connected to ManageMemberships yet. An owner can connect them. See [Connecting a Manager to ManageMemberships](./user/user.md#-connecting-a-manager-to-managememberships). Until then, they're treated like any other cashier.

### Where the Limit Is Set

The limit is set in ManageMemberships, not in ManageRegister:

1. Go to **Members → Membership Levels** and edit the level.
2. Open **Check-ins & credits** and fill in **Advance Booking Limit (per month)**. Leave it blank for no limit.

For how the limit is counted, see the ManageMemberships help: **Classes**, **Advance Booking Limit**.

This works once the ManageMemberships update is live.

---

## Tips

- Make sure the class or event is set up and active on ManageMemberships before trying to book it here.
- If a class doesn't appear, verify it hasn't reached capacity or been deactivated.

---

## Checking In for a Class

Check people in for today's classes from [Account Check](./account-check.md#for-a-class). A class they've booked or bought is picked for them, and checking in marks that booking attended.

A class has to be paid for before they can be checked in. If they haven't booked, **Collect payment** in Account Check books their seat and puts it in the cart.
