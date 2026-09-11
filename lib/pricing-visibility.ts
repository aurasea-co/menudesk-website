// One switch for every price on this site. Same variable name across all five
// deployments. Default OFF — a deployment that forgets it shows no price
// rather than showing one to a build partner. Nothing is deleted; flipping
// NEXT_PUBLIC_SHOW_PRICING to 'true' restores everything.
export function showPricing(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_PRICING === 'true'
}
