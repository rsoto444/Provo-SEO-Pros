// Text-message consent for A2P 10DLC. Wording approved by the owner and
// matched to the "SMS Text Messaging" section of the privacy policy:
// two separate boxes, both unchecked and optional.
const box = { display: "flex", gap: "10px", alignItems: "flex-start", font: "var(--type-caption)", color: "var(--text-muted)", lineHeight: 1.5, textTransform: "none" as const, letterSpacing: "normal" };
const link = { color: "var(--text-link, #0b62c9)" };

export default function SmsConsent() {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <label style={box}>
        <input type="checkbox" name="sms_consent_non_marketing" value="yes" style={{ marginTop: "3px", flex: "0 0 auto" }} />
        <span>
          I agree to receive text messages from Provo SEO Pros about my Growth Audit and appointments, including
          confirmations, reminders, rescheduling notices and replies to my questions. Message frequency varies. Message
          and data rates may apply. Reply STOP to opt out or HELP for help. See our{" "}
          <a href="/privacy-policy/" style={link}>Privacy Policy</a> and <a href="/terms-and-conditions/" style={link}>Terms</a>.
        </span>
      </label>
      <label style={box}>
        <input type="checkbox" name="sms_consent_marketing" value="yes" style={{ marginTop: "3px", flex: "0 0 auto" }} />
        <span>
          I agree to receive occasional marketing text messages from Provo SEO Pros with updates about our services and
          helpful resources. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP
          for help.
        </span>
      </label>
      <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", margin: 0 }}>
        Neither box is required. Consent to receive text messages is not a condition of purchase.
      </p>
    </div>
  );
}
