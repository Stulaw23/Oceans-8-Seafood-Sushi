import React, { useState, useMemo } from 'react';
import { Utensils, Sparkles, Search, MessageCircle, Plus, Check, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({});
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'sushi', label: 'Signature Sushi' },
    { id: 'seafood', label: 'Fresh Seafood Mains' },
    { id: 'platters', label: 'Combos & Feasts' },
    { id: 'starters', label: 'Starters & Soup' },
    { id: 'drinks', label: 'Drinks & Cape Wine' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddItem = (item: MenuItem) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const totalSelectedCount: number = (Object.values(selectedItems) as number[]).reduce(
    (sum: number, count: number): number => sum + count,
    0
  );

  const orderSubtotal: number = (Object.entries(selectedItems) as [string, number][]).reduce(
    (sum: number, [id, qty]: [string, number]): number => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      return sum + (item ? item.price * qty : 0);
    },
    0
  );

  const generateWhatsAppOrderText = () => {
    const lines = (Object.entries(selectedItems) as [string, number][]).map(([id, qty]: [string, number]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      return `• ${qty}x ${item?.name} (R ${item ? item.price * qty : 0})`;
    });

    const msg = `Hello Oceans 8 Somerset West! I'd like to place an order / inquiry:%0A%0A${lines.join(
      '%0A'
    )}%0A%0AEstimated Total: R ${orderSubtotal}%0A%0APlease let me know preparation time or table availability. Thank you!`;
    return `https://wa.me/27849049339?text=${msg}`;
  };

  return (
    <section id="menu" className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B3B4A]/5 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#E8A849]" />
            Fresh & Artisanal
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] uppercase tracking-wide mb-3">
            Menu
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
            Explore our ocean catch, handmade sushi rolls, and chef platters prepared fresh daily.
          </p>

          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8A849]" />
            <span>View Full Menu</span>
          </button>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0B3B4A] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search prawns, kingklip, sushi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const qty = selectedItems[item.id] || 0;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Item Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-[#E8A849] text-[#0B3B4A] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        {item.tag}
                      </span>
                    )}
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-1 rounded-full bg-[#0B3B4A] text-white text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3 text-[#E8A849]" /> Chef Pick
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[#0B3B4A] font-bold text-sm shadow-md">
                    R {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg font-bold text-[#0B3B4A] mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Action row */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      Standard Portion
                    </span>

                    {qty === 0 ? (
                      <button
                        onClick={() => handleAddItem(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B3B4A]/5 hover:bg-[#0B3B4A] text-[#0B3B4A] hover:text-white text-xs font-bold transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Inquiry</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-[#0B3B4A]/5 px-2 py-1 rounded-full">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="w-5 h-5 rounded-full bg-white text-gray-700 flex items-center justify-center text-xs font-bold hover:bg-red-50 hover:text-red-600 shadow-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-[#0B3B4A] px-1">{qty}</span>
                        <button
                          onClick={() => handleAddItem(item)}
                          className="w-5 h-5 rounded-full bg-[#0B3B4A] text-white flex items-center justify-center text-xs font-bold hover:bg-[#1A6A7A] shadow-xs"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
            <Utensils className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">No dishes match "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-[#0B3B4A] font-bold underline"
            >
              Clear filter and view all
            </button>
          </div>
        )}

        {/* Floating Order / Inquiry Bar if customer added dishes */}
        {totalSelectedCount > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl bg-[#061F28] text-white p-4 rounded-2xl shadow-2xl border border-[#E8A849]/30 flex items-center justify-between gap-4 animate-bounce-short">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8A849] text-[#0B3B4A] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/70">Selected {totalSelectedCount} item{totalSelectedCount > 1 ? 's' : ''}</p>
                <p className="text-base font-bold text-[#E8A849]">R {orderSubtotal}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedItems({})}
                className="text-xs text-white/60 hover:text-white px-2 py-1"
              >
                Clear
              </button>
              <a
                href={generateWhatsAppOrderText()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
