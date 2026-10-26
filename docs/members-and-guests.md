---
sidebar_position: 8
---

# Members and Guests

A guest is a member with no membership: someone who buys at the counter or pays by the hour but hasn't signed up. ManageRegister has no separate guest type. You add a guest the same way as any other member, then attach them to a sale.

In the Cashier member search, members created in ManageRegister show **(Free)** after their name.

---

## Three Ways to Add a Guest

| Where | Required | Optional | Added to ManageMemberships? |
|-------|----------|----------|-----------------------------|
| **Member > Create Member** | Name | Address, Mobile, Contact | No. Stays in ManageRegister |
| **Quick Add Member** in the Cashier | Name | Phone, Email, Address | No. Stays in ManageRegister |
| **User > Register Member** | Name, Email, Mobile, Address, City, State, Zip | Plan | Yes. Creates a ManageMemberships account (inactive until set up, see below) |

---

## Member > Create Member

1. Open **Member > Create Member**.
2. Enter the **Name**. It is the only required field.
3. Optionally fill in **Address**, **Mobile** and **Contact** (an email address or phone number).
4. To leave a warning for staff, type it in **Member Notes**. See [Member Notes at the POS](./member-notes-at-the-pos.md).
5. Save the member.

The **Code** field is filled in for you with a code that starts with **CUS**, for example **CUS0001**. It shows in the **Code** column of the member list.

---

## Quick Add Member

1. In the Cashier, click **Quick Add Member**.
2. Enter the **Name**. **Phone**, **Email** and **Address** are optional.
3. Click **Create Member**.

The new member is selected on the current sale straight away.

Quick Add has no notes field. To add a note, open the member afterward from **Member > Edit**.

---

## Register Member

Use **Register Member** when the person should also have a ManageMemberships account.

1. Open **User > Register Member**.
2. On **Member Info**, fill in **Full Name**, **Email**, **Mobile**, **Address**, **City**, **State** and **Zip**. All are required.
3. On **Choose a Plan**, pick a plan, or leave **No plan — sign up only**.
4. Click **Register Member**.

If a ManageMemberships member with the same email already exists, ManageRegister continues with that account and updates its contact info with what you entered. The plan you picked is not applied to an existing account.

After the member is created, the wizard takes them through any agreements they still need to sign.

---

## Registering Without a Plan

If you leave **No plan — sign up only** and no ManageMemberships member with that email exists yet, the person is created in ManageMemberships as **inactive**. The Cashier blocks sales to them with the **INACTIVE MEMBER - TRANSACTION BLOCKED** pop-up and the reason **Inactive - reason not recorded**. See [Paused and Inactive Members](./paused-and-inactive-members.md). If the email already exists, ManageRegister uses that account and the plan you picked is not applied.

To make them active:

1. On the last step of the wizard, click **Send Payment Link**. ManageMemberships emails the person a secure link, valid for 45 days, to add a payment method. It creates a $0 placeholder invoice and charges nothing. After the link is sent, the screen shows **Registration complete**.
2. When the person saves a card, they become active.

Staff can also turn **Active** on in ManageMemberships, using the **Active** toggle on the member's Overview. It can take about a minute for the register to show the change. Search for the member again in the Cashier.

---

## What Stays in ManageRegister

Members created with **Create Member** or **Quick Add Member** exist only in ManageRegister. That has two consequences:

- **Their notes stay in ManageRegister.** They are not sent to ManageMemberships. The Notes box on the member form says edits sync back to ManageMemberships automatically. That is only true for members who also exist in ManageMemberships.
- **The inactive block needs a ManageMemberships account.** The **INACTIVE MEMBER - TRANSACTION BLOCKED** pop-up follows the member's **Active** setting in ManageMemberships, so it can only be used on a person who exists there. See [Paused and Inactive Members](./paused-and-inactive-members.md).

For a guest who exists only in ManageRegister, use a member note to warn staff. A note warns but does not block the sale.

---

## Tips

- Use **Create Member** or **Quick Add Member** for a one-time customer. Use **Register Member** when the person should become a ManageMemberships member.
- To warn staff about a guest, see [Member Notes at the POS](./member-notes-at-the-pos.md).
- A member created with **Create Member** or **Quick Add Member** has no date of birth, so the Cashier shows no age badge. See [Age Badge (Under 18 / Under 21)](./age-badge.md).
