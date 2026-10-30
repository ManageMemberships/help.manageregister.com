---
sidebar_position: 1
---

# General Setting

The General Settings page is where you configure your store's core business information, preferences, and profile.

---

## About Section

Configure your business basics:

- **Shop Name**: Your store's display name.
- **Business Type**: Select your business type (e.g., retail, FnB). This affects which features are visible.
- **Shop Location**: Your store's physical address.
- **Photo**: Upload your business logo for receipts and branding.

---

## App Tab

Additional settings found inside the App tab:

- **Currency**: Set the currency used throughout the system.
- **Firearm Rental Charge Products** and **Rental Alert Time**: These show only while Firearm rental custody is turned on. See [Firearm Rental Custody](../firearm-rental.md#set-it-up).

### Members Who Owe on Their Membership

In the **Range & Booking Settings** section of the App tab, next to **Member-Exempt Products**. It decides what the Cashier does with a member whose **membership payment failed** and who owes a balance:

- **Block the sale until the overdue balance is paid** (default): the Cashier shows the **MEMBERSHIP PAYMENT OVERDUE** popup. Nothing can be sold to them until the balance is in the cart.
- **Sell to them as a guest (no member pricing) until it is paid**: they can buy, shoot and do transfers at non-member prices. Member-exempt products are charged and member discounts don't apply. The Cashier and Account Check show a past-due notice with a button to collect the balance, and paying it gives them member pricing again for that sale.

Members inactive for any other reason are always blocked. Only the owner can change this setting.

How many failed payments it takes before a member goes inactive is set in ManageMemberships, under Portal Settings.

See [Paused and Inactive Members](../paused-and-inactive-members.md#members-whose-payment-failed) for what staff see in each case.

---

## Tax & Financial Settings

- **Tax configuration**: Set your tax rate and how it applies to sales.
- **Currency format**: Control how amounts are displayed.

---

## Category Markups

Set default markup percentages at the category level. This allows you to apply consistent pricing rules across product categories.

---

## Feature Tab

The Feature tab has a tick box for each optional part of ManageRegister. Tick a box and save to turn that part on, or untick it and save to turn it off. Only an owner or admin sees this tab.

- **Firearm rental custody**: Keeps track of which rental guns are out and who has them. It is off by default. See [Firearm Rental Custody](../firearm-rental.md).

Click **Save** and confirm when asked.

---

## Profile

Update your personal account settings:

- **Name** and **contact information**
- **Timezone** preference
- **Language**: Choose the system language.
- **New Password**: Update your account password.
- **Session Lock PIN**: Set a PIN to lock and unlock your session.

---

## Manager Override Codes

The **App** tab has a **Manager Override Codes** section where you choose which POS actions, such as discounts and refunds, ask for a manager PIN before they go through.

For what each option does, how to set up manager PINs, and how to read the Override Logs, see [Manager Override Codes](./manager-override.md).

---

## Integrations

The Integrations section allows you to connect ManageRegister with third-party services and configure external integrations.

---

## Tips

- Set your **Business Type** correctly — some features (like Table management) only appear for specific business types.
- Always set the correct **Timezone** so your reports and selling history timestamps are accurate.
- Configure these settings before going live with sales.
