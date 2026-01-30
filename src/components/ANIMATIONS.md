# 🎨 ANIMASI PORTFOLIO - DOKUMENTASI

## Daftar Animasi yang Ditambahkan

### ✨ Tailwind Custom Animations (tailwind.config.js)

Berikut adalah custom animations yang telah dibuat:

1. **float** - Efek mengambang naik-turun
2. **slide-up** - Slide dari bawah ke atas
3. **slide-down** - Slide dari atas ke bawah
4. **slide-left** - Slide dari kanan ke kiri
5. **slide-right** - Slide dari kiri ke kanan
6. **fade-in** - Fade in biasa
7. **fade-in-up** - Fade in dengan slide dari bawah
8. **scale-in** - Scale dari kecil ke besar
9. **bounce-slow** - Bounce lebih lambat
10. **typing** - Efek typing
11. **blink** - Efek berkedip (untuk cursor)

---

## 📍 Animasi Per Section

### 1. **NAVBAR**
- Logo: `animate-slide-right` - Muncul dari kiri
- Menu items: `animate-slide-up` dengan staggered delay - Muncul satu per satu dari bawah
- Mobile menu: `animate-slide-down` - Slide dari atas
- Hover effects: Scale dan color transitions
- Scroll effect: Background berubah saat scroll

**Cara Kerja:**
```jsx
// Staggered animation dengan delay
style={{ animationDelay: `${index * 0.1}s` }}
```

---

### 2. **HERO SECTION**
- **Nama**: Typing effect - Muncul huruf per huruf
- **Foto profil**: 
  - `animate-float` - Mengambang naik-turun
  - Hover scale effect
  - Decorative circles dengan `animate-ping` dan `animate-pulse`
- **Icon emoji**: `animate-bounce-slow`
- **Subtitle & Description**: `animate-fade-in-up` dengan staggered delay
- **CTA Buttons**: Fade in dengan delay + hover scale
- **Scroll indicator**: `animate-bounce`

**Typing Effect:**
```jsx
useEffect(() => {
  if (currentIndex < fullText.length) {
    setTimeout(() => {
      setText(prev => prev + fullText[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, 100);
  }
}, [currentIndex]);
```

---

### 3. **ABOUT SECTION**
- **Scroll-triggered animation** - Muncul saat di-scroll
- Title: Fade in dari bawah
- Image/Icon: Slide dari kiri + floating effect
- Content: Slide dari kanan
- Feature items: Slide dengan staggered delay
- Hover effects: Translate X dan scale

**Intersection Observer:**
```jsx
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );
}, []);
```

---

### 4. **EXPERIENCE SECTION (Timeline)**
- **Timeline line**: Gradient color
- **Timeline dots**: Hover scale effect
- **Cards**: Fade in saat scroll dengan observer per item
- **Icons**: `animate-bounce-slow`
- **Hover effects**: Shadow, scale, border color

**Per-Item Animation:**
```jsx
visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'
```

---

### 5. **EDUCATION SECTION**
- **Cards**: Scale on hover
- **Progress bar**: Animasi fill dari 0 ke target %
- **Background circles**: Scale on hover
- **Icons**: `animate-bounce-slow`
- **Pulse effect** pada icon di bawah

**Progress Bar Animation:**
```jsx
style={{ 
  width: isVisible ? '70%' : '0%',
  transitionDelay: `${(index * 200) + 300}ms`
}}
```

---

### 6. **SKILLS SECTION**
- **Soft skills progress bars**: 
  - Animasi mengisi dari 0 ke persentase target
  - Sequential animation per skill
- **Technical skills icons**: 
  - `animate-float` 
  - Hover scale
  - Staggered fade in
- **CTA Box**: `animate-pulse` untuk heading

**Animated Progress:**
```jsx
useEffect(() => {
  skills.forEach((skill, index) => {
    setTimeout(() => {
      setAnimatedLevels(prev => ({ ...prev, [skill.name]: skill.level }));
    }, index * 200);
  });
}, []);
```

---

### 7. **CONTACT SECTION**
- **Contact cards**: 
  - Fade in dengan staggered delay
  - `animate-float` untuk icons
  - Hover scale
- **Buttons**: Hover scale dan shadow
- **Text**: `animate-pulse` untuk highlight

---

## 🎯 Cara Menggunakan Animasi

### Menambah Animasi Baru di Tailwind:

1. Buka `tailwind.config.js`
2. Tambahkan di `theme.extend.animation`:
```js
'nama-animasi': 'keyframeName duration ease iteration',
```
3. Tambahkan keyframes:
```js
keyframeName: {
  '0%': { /* style */ },
  '100%': { /* style */ },
}
```

### Menggunakan di Component:

```jsx
// Animasi biasa
<div className="animate-float">

// Dengan delay
<div 
  className="animate-fade-in-up"
  style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
>

// Conditional animation
<div className={`${isVisible ? 'animate-slide-up' : ''}`}>
```

---

## 🔧 Tips & Best Practices

1. **Jangan overuse animasi** - Terlalu banyak animasi bisa mengganggu
2. **Gunakan `animationFillMode: 'backwards'`** untuk animasi dengan delay
3. **Threshold 0.1-0.2** bagus untuk Intersection Observer
4. **Staggered delay** membuat animasi lebih natural (100-200ms per item)
5. **Hover states** harus cepat (300ms max)
6. **Scroll animations** lebih lambat (600-700ms)

---

## 🎨 Customisasi

### Mengubah Kecepatan Animasi:
Edit di `tailwind.config.js`:
```js
'float': 'float 3s ease-in-out infinite',
//              ↑ ubah durasi disini
```

### Menambah Animasi Custom:
```js
animation: {
  'nama-baru': 'keyframe 2s ease-out',
},
keyframes: {
  keyframe: {
    '0%': { transform: 'scale(0)' },
    '100%': { transform: 'scale(1)' },
  },
}
```

---

## 🚀 Performance Tips

1. Gunakan `transform` dan `opacity` - GPU accelerated
2. Hindari animasi `width`, `height`, `top`, `left` - CPU intensive
3. Gunakan `will-change` untuk animasi complex (tapi hati-hati)
4. Test di device yang lebih lambat

---

**Semua animasi sudah responsive dan optimal! ✨**