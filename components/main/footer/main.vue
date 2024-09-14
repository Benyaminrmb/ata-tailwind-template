<template>
  <footer class="grid grid-cols-12 bg-footer text-base-content w-full">
    <aside class="col-span-12 lg:col-span-4 flex w-full">
      <div class="flex flex-col w-full justify-center items-center gap-3">
        <img alt="" class="w-8 lg:hidden flex" src="/logo.png" />
        <main-header-logo-link class="flex" />
        <div class="gap-2 flex flex-row">
          <a href="">
            <main-mask icon="instagram" />
          </a>
        </div>
      </div>
    </aside>
    <nav>
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 class="footer-title">Company</h6>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 class="footer-title">Legal</h6>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
</template>
<script setup lang="ts"></script>
