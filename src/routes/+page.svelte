<script>
    let { data } = $props();
    
    let users = $state(data?.registered)
    

</script>

<div class="bg-gray-100 flex flex-col items-center justify-center h-screen">
    <div class="stats shadow">
        <div class="stat">
          <div class="stat-title font-bold">Total Pre-registered User</div>
          <div class="stat-value text-center">{users}</div>
        </div>
      </div><br>
    <div class="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Coming Soon</h1>
        <p class="text-gray-600 mb-6">We are working hard to launch something amazing. Stay tuned!</p>
        
        <form method="POST">
            <div class="flex items-center mb-4">
                <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" name="email" required>
                <button type="submit" class="btn btn-primary ml-2">Notify Me</button>
            </div>
            <p class="text-sm text-gray-500">We'll only notify you when we launch. No spam!</p>
            <small>Claim discount coupon when launched.</small>
        </form>
    </div>
</div>